import { PricingContext } from '../domain/value-objects/PricingContext.vo';
import { PricingRule } from '../domain/entities/PricingRule.entity';
import { PricingRuleSet } from '../domain/entities/PricingRuleSet.entity';
import { PricingRuleStatus } from '../domain/value-objects/PricingRuleStatus.vo';
import { PricingRuleType } from '../domain/value-objects/PricingRuleType.vo';
import { QuantityCondition } from '../domain/value-objects/PricingCondition.vo';
import { MemoryPricingRuleSetRepository } from '../infrastructure/repositories/MemoryPricingRuleSetRepository';
import { PricingRuleEvaluator } from '../application/services/PricingRuleEvaluator';
import { AmbiguousPricingConflictError } from '../domain/errors/AmbiguousPricingConflictError';

describe('Pricing Engine', () => {
  it('should evaluate deterministic precedence', async () => {
    const repo = new MemoryPricingRuleSetRepository();
    const evaluator = new PricingRuleEvaluator(repo);

    const rs = new PricingRuleSet('rs1', 'Base', PricingRuleStatus.Active, 100);
    
    // Rule A: no conditions, priority 10
    const ruleA = new PricingRule('ra', 'Rule A', PricingRuleType.FixedAmountAdjustment, PricingRuleStatus.Active, 10, -5, null, null, []);
    
    // Rule B: 1 condition (more specific), same priority 10
    const ruleB = new PricingRule('rb', 'Rule B', PricingRuleType.FixedAmountAdjustment, PricingRuleStatus.Active, 10, -15, null, null, [
      new QuantityCondition(10, null)
    ]);

    rs.addRule(ruleA);
    rs.addRule(ruleB);
    await repo.save(rs);

    const ctx = new PricingContext(null, null, 'pv1', 'pb1', null, 15, 100, 'USD', null, null, null, new Date());
    
    const res = await evaluator.evaluate(ctx);
    // Should pick Rule B because it has higher specificity (1 condition vs 0)
    expect(res.finalCalculatedPrice).toBe(85);
    expect(res.pricingRuleIds).toContain('rb');
  });

  it('should throw AmbiguousPricingConflictError for exact tie with different outcomes', async () => {
    const repo = new MemoryPricingRuleSetRepository();
    const evaluator = new PricingRuleEvaluator(repo);

    const rs = new PricingRuleSet('rs1', 'Base', PricingRuleStatus.Active, 100);
    
    // Exact same precedence, but different outcomes
    const rule1 = new PricingRule('r1', 'Rule 1', PricingRuleType.FixedAmountAdjustment, PricingRuleStatus.Active, 10, -5, null, null, []);
    const rule2 = new PricingRule('r2', 'Rule 2', PricingRuleType.FixedAmountAdjustment, PricingRuleStatus.Active, 10, -15, null, null, []);

    rs.addRule(rule1);
    rs.addRule(rule2);
    await repo.save(rs);

    const ctx = new PricingContext(null, null, 'pv1', 'pb1', null, 15, 100, 'USD', null, null, null, new Date());
    
    await expect(evaluator.evaluate(ctx)).rejects.toThrow(AmbiguousPricingConflictError);
  });

  it('should enforce immutable Context boundary rejection', () => {
    expect(() => {
      new PricingContext(null, null, 'pv1', 'pb1', null, -5, 100, 'USD', null, null, null, new Date());
    }).toThrow('Quantity cannot be negative');
  });
  
  it('should correctly round percentage adjustments', () => {
    const rule = new PricingRule('pct', 'Pct', PricingRuleType.PercentageAdjustment, PricingRuleStatus.Active, 10, 15, null, null, []);
    // 10.50 + 15% = 12.075 -> rounds to 12.08
    expect(rule.applyTo(10.50)).toBe(12.08);
  });
});

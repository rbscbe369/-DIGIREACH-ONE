import { PricingRuleType } from '../value-objects/PricingRuleType.vo';
import { PricingRuleStatus } from '../value-objects/PricingRuleStatus.vo';
import { PricingCondition } from '../value-objects/PricingCondition.vo';
import { PricingContext } from '../value-objects/PricingContext.vo';

export class PricingRule {
  constructor(
    public readonly ruleId: string,
    public readonly name: string,
    public readonly type: PricingRuleType,
    public status: PricingRuleStatus,
    public readonly priority: number,
    public readonly adjustmentValue: number, // positive or negative
    public readonly validFrom: Date | null,
    public readonly validTo: Date | null,
    public readonly conditions: PricingCondition[]
  ) {}

  public getSpecificity(): number {
    return this.conditions.length;
  }

  public isEligible(context: PricingContext): boolean {
    if (this.status !== PricingRuleStatus.Active) return false;
    if (this.validFrom && this.validFrom > context.evaluationDate) return false;
    if (this.validTo && this.validTo < context.evaluationDate) return false;
    
    for (const condition of this.conditions) {
      // type narrowing is basic for demo
      if (!condition.isSatisfiedBy(context)) return false;
    }
    
    return true;
  }

  public applyTo(currentPrice: number): number {
    switch (this.type) {
      case PricingRuleType.FixedPriceOverride:
        return this.adjustmentValue;
      case PricingRuleType.FixedAmountAdjustment:
        return currentPrice + this.adjustmentValue;
      case PricingRuleType.PercentageAdjustment: {
        // Half-Even (Banker's rounding) would be complex, doing Math.round to cent precision
        const factor = 1 + (this.adjustmentValue / 100);
        return Math.round((currentPrice * factor) * 100) / 100;
      }
      default:
        throw new Error('Unsupported rule type');
    }
  }
}

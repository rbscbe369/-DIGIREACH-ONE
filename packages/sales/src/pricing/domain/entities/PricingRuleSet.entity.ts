import { PricingRule } from './PricingRule.entity';
import { PricingRuleStatus } from '../value-objects/PricingRuleStatus.vo';
import { PricingContext } from '../value-objects/PricingContext.vo';

export class PricingRuleSet {
  private rules: Map<string, PricingRule> = new Map();

  constructor(
    public readonly ruleSetId: string,
    public readonly name: string,
    public status: PricingRuleStatus,
    public readonly priority: number
  ) {}

  public addRule(rule: PricingRule): void {
    if (this.status === PricingRuleStatus.Archived) {
      throw new Error('Cannot modify archived Rule Set');
    }
    this.rules.set(rule.ruleId, rule);
  }

  public getRules(): PricingRule[] {
    return Array.from(this.rules.values());
  }

  public getEligibleRules(context: PricingContext): PricingRule[] {
    if (this.status !== PricingRuleStatus.Active) return [];
    return this.getRules().filter(r => r.isEligible(context));
  }
}

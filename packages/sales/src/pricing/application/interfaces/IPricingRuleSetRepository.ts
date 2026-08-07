import { PricingRuleSet } from '../../domain/entities/PricingRuleSet.entity';

export interface IPricingRuleSetRepository {
  save(ruleSet: PricingRuleSet): Promise<void>;
  findById(id: string): Promise<PricingRuleSet | null>;
  findAll(): Promise<PricingRuleSet[]>;
}

import { IPricingRuleSetRepository } from '../../application/interfaces/IPricingRuleSetRepository';
import { PricingRuleSet } from '../../domain/entities/PricingRuleSet.entity';

export class MemoryPricingRuleSetRepository implements IPricingRuleSetRepository {
  private store: Map<string, PricingRuleSet> = new Map();

  public async save(ruleSet: PricingRuleSet): Promise<void> {
    this.store.set(ruleSet.ruleSetId, ruleSet);
  }

  public async findById(id: string): Promise<PricingRuleSet | null> {
    return this.store.get(id) || null;
  }

  public async findAll(): Promise<PricingRuleSet[]> {
    return Array.from(this.store.values());
  }
}

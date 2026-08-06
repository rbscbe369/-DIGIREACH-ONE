import { IRuleSetRepository } from '../../application/interfaces/i-rule-set.repository';
import { RuleSet } from '../../domain/entities/rule-set.entity';

export class MemoryRuleSetRepository implements IRuleSetRepository {
  private ruleSets = new Map<string, RuleSet>();

  async findById(id: string): Promise<RuleSet | null> {
    return this.ruleSets.get(id) || null;
  }

  async save(ruleSet: RuleSet): Promise<void> {
    this.ruleSets.set(ruleSet.id, ruleSet);
  }
}

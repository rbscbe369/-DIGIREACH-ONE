import { RuleSet } from '../../domain/entities/rule-set.entity';

export interface IRuleSetRepository {
  findById(id: string): Promise<RuleSet | null>;
  save(ruleSet: RuleSet): Promise<void>;
}

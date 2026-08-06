import { RuleExecution } from '../../domain/entities/rule-execution.entity';
import { RuleHistory } from '../../domain/entities/rule-history.entity';

export interface IRuleHistoryRepository {
  saveExecution(execution: RuleExecution): Promise<void>;
  saveHistory(history: RuleHistory): Promise<void>;
}

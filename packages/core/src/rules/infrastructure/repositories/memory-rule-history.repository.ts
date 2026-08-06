import { IRuleHistoryRepository } from '../../application/interfaces/i-rule-history.repository';
import { RuleExecution } from '../../domain/entities/rule-execution.entity';
import { RuleHistory } from '../../domain/entities/rule-history.entity';

export class MemoryRuleHistoryRepository implements IRuleHistoryRepository {
  private executions = new Map<string, RuleExecution>();
  private histories = new Map<string, RuleHistory>();

  async saveExecution(execution: RuleExecution): Promise<void> {
    this.executions.set(execution.id, execution);
  }

  async saveHistory(history: RuleHistory): Promise<void> {
    this.histories.set(history.id, history);
  }
}

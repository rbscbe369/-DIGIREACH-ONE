import { IAIExecutionRepository } from '../../application/interfaces/i-ai-execution.repository';
import { AIExecutionHistory } from '../../domain/entities/ai-execution-history.entity';

export class MemoryExecutionRepository implements IAIExecutionRepository {
  private histories = new Map<string, AIExecutionHistory>();

  async findById(id: string): Promise<AIExecutionHistory | null> {
    return this.histories.get(id) || null;
  }

  async save(history: AIExecutionHistory): Promise<void> {
    this.histories.set(history.id, history);
  }
}

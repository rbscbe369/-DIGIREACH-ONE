import { IExecutionRepository } from '../../application/interfaces/i-execution-repository';
import { ExecutionHistory } from '../../domain/entities/execution-history.entity';

export class MemoryExecutionRepository implements IExecutionRepository {
  private histories = new Map<string, ExecutionHistory>();

  async findById(id: string): Promise<ExecutionHistory | null> {
    return this.histories.get(id) || null;
  }

  async save(history: ExecutionHistory): Promise<void> {
    this.histories.set(history.id, history);
  }
}

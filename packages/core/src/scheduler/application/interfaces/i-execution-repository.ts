import { ExecutionHistory } from '../../domain/entities/execution-history.entity';

export interface IExecutionRepository {
  findById(id: string): Promise<ExecutionHistory | null>;
  save(history: ExecutionHistory): Promise<void>;
}

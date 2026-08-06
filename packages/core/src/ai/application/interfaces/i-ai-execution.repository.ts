import { AIExecutionHistory } from '../../domain/entities/ai-execution-history.entity';

export interface IAIExecutionRepository {
  findById(id: string): Promise<AIExecutionHistory | null>;
  save(history: AIExecutionHistory): Promise<void>;
}

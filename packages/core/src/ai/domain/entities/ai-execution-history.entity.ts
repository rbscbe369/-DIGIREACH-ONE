import { AIRequest } from './ai-request.entity';
import { AIResult } from '../value-objects/ai-result.vo';

export class AIExecutionHistory {
  constructor(
    public readonly id: string,
    public readonly taskId: string,
    public readonly request: AIRequest,
    public readonly result: AIResult | null,
    public readonly errorReason: string | null,
    public readonly executedAt: Date,
  ) {}
}

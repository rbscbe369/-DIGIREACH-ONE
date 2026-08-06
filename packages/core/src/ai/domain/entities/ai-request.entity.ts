import { AIContext } from '../value-objects/ai-context.vo';
import { AIModel } from '../value-objects/ai-model.vo';

export class AIRequest {
  constructor(
    public readonly id: string,
    public readonly taskId: string,
    public readonly systemMessage: string,
    public readonly userMessage: string,
    public readonly variables: Record<string, unknown>,
    public readonly context: AIContext,
    public readonly resolvedModel: AIModel,
  ) {}
}

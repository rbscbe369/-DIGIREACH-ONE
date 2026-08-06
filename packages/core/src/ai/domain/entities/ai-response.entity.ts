import { AITokenUsage } from '../value-objects/ai-token-usage.vo';

export class AIResponse {
  constructor(
    public readonly id: string,
    public readonly requestId: string,
    public readonly content: string,
    public readonly tokenUsage: AITokenUsage,
    public readonly latencyMs: number,
    public readonly finishReason: string,
  ) {}
}

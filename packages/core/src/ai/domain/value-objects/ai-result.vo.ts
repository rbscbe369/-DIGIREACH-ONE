import { AITokenUsage } from './ai-token-usage.vo';
import { AICost } from './ai-cost.vo';
import { AISafetyMetadata } from './ai-safety-metadata.vo';

export class AIResult {
  constructor(
    public readonly content: string,
    public readonly jsonPayload: Record<string, unknown> | null,
    public readonly tokenUsage: AITokenUsage,
    public readonly cost: AICost,
    public readonly safetyMetadata: AISafetyMetadata,
  ) {}
}

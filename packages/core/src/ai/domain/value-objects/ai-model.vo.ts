import { AICapabilities } from './ai-capabilities.vo';

export class AIModel {
  constructor(
    public readonly id: string, // e.g. "gpt-4o", "claude-3-opus"
    public readonly providerId: string,
    public readonly name: string,
    public readonly inputCostPer1k: number,
    public readonly outputCostPer1k: number,
    public readonly contextWindowTokens: number,
    public readonly capabilities: AICapabilities,
  ) {}
}

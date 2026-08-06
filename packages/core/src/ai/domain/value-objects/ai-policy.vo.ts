export class AIPolicy {
  constructor(
    public readonly allowedProviders: string[],
    public readonly allowedModels: string[],
    public readonly maxCostPerRequestUsd: number,
    public readonly maxTokensPerRequest: number,
    public readonly timeoutMs: number,
    public readonly retryPolicy: string, // simple ref for scaffolding
    public readonly dataClassificationLevel: string,
    public readonly maxTemperature: number,
  ) {}
}

export class AIUsageStatistics {
  constructor(
    public readonly promptTokens: number,
    public readonly completionTokens: number,
    public readonly executionMs: number,
  ) {}
}

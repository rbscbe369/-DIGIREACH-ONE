export class DecisionExplanation {
  constructor(
    public readonly ruleId: string,
    public readonly passed: boolean,
    public readonly reason: string,
    public readonly traceId: string,
    public readonly timestamp: Date = new Date(),
  ) {}
}

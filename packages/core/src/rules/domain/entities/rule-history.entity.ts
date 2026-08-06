export class RuleHistory {
  constructor(
    public readonly id: string,
    public readonly ruleExecutionId: string,
    public readonly evaluatedRules: string[],
    public readonly matchedRules: string[],
    public readonly errorReason: string | null = null,
  ) {}
}

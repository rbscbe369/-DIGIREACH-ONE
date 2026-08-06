import { RuleResult } from '../value-objects/rule-result.vo';

export class RuleExecution {
  constructor(
    public readonly id: string,
    public readonly ruleSetId: string,
    public readonly versionId: string,
    public readonly correlationId: string,
    public readonly result: RuleResult,
    public readonly durationMs: number,
    public readonly executedAt: Date,
  ) {}
}

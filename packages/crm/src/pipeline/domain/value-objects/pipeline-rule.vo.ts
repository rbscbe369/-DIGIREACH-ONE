export class PipelineRule {
  constructor(
    public readonly ruleId: string,
    public readonly condition: string,
  ) {}
}

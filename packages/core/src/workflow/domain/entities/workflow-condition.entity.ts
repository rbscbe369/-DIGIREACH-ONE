export class WorkflowCondition {
  constructor(
    public readonly id: string,
    public readonly fieldPath: string,
    public readonly operator: string,
    public readonly expectedValue: unknown,
  ) {}
}

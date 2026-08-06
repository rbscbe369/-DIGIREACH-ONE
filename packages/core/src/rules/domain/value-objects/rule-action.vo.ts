export class RuleAction {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly payload: Record<string, unknown>,
  ) {}
}

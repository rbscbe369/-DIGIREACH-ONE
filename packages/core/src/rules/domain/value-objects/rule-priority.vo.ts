export class RulePriority {
  constructor(
    public readonly weight: number,
    public readonly overrides: string[] = [], // IDs of rules this priority overrides
  ) {}
}

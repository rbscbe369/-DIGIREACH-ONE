export class EscalationPolicy {
  constructor(
    public readonly timeoutMs: number,
    public readonly escalateToRoleId: string | null,
    public readonly escalateToUserId: string | null,
    public readonly actionPlaceholder: string | null,
  ) {}
}

export class AuditTarget {
  constructor(
    public readonly targetId: string,
    public readonly targetType: string,
    public readonly beforeState: Record<string, unknown> | null,
    public readonly afterState: Record<string, unknown> | null,
  ) {}
}

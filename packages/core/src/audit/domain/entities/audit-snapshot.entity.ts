export class AuditSnapshot {
  constructor(
    public readonly snapshotId: string,
    public readonly targetId: string,
    public readonly targetType: string,
    public readonly timestamp: Date,
    public readonly state: Record<string, unknown>,
  ) {}
}

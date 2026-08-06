export class OrganizationSnapshot {
  constructor(
    public readonly snapshotId: string,
    public readonly organizationId: string,
    public readonly timestamp: Date,
    public readonly dataPayload: Record<string, unknown>,
  ) {}
}

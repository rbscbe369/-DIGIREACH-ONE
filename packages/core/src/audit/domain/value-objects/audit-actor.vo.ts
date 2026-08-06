export class AuditActor {
  constructor(
    public readonly actorId: string | null,
    public readonly actorType: 'USER' | 'SYSTEM' | 'SERVICE' | 'INTEGRATION',
    public readonly organizationId: string | null,
    public readonly impersonatedBy: string | null,
  ) {}
}

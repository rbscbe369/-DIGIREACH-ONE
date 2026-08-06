export class AuditEvent {
  constructor(
    public readonly eventName: string,
    public readonly eventVersion: string,
    public readonly payload: Record<string, unknown>,
  ) {}
}

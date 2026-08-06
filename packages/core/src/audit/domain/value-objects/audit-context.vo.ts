export class AuditContext {
  constructor(
    public readonly correlationId: string | null,
    public readonly traceId: string | null,
    public readonly ipAddress: string | null,
    public readonly userAgent: string | null,
    public readonly sessionToken: string | null,
  ) {}
}

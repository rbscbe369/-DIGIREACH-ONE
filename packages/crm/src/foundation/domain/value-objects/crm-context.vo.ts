export class CRMContext {
  constructor(
    public readonly businessContext: Record<string, unknown>,
    public readonly executionContext: Record<string, unknown>,
    public readonly organization: Record<string, unknown> | null,
    public readonly workspace: Record<string, unknown> | null,
    public readonly correlationId: string,
    public readonly traceId: string,
  ) {}
}

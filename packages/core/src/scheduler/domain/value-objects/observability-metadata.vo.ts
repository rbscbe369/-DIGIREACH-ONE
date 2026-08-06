export class ObservabilityMetadata {
  constructor(
    public readonly correlationId: string,
    public readonly traceId: string,
    public readonly executionDurationMs: number | null = null,
    public readonly providerId: string | null = null,
    public readonly executionNode: string | null = null,
  ) {}
}

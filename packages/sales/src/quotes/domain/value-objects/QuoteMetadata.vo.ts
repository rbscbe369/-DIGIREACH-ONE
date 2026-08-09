export class QuoteMetadata {
  constructor(
    public readonly tenantId: string | null,
    public readonly organizationId: string | null,
    public readonly customerReference: string | null,
    public readonly currency: string,
    public readonly notes: string | null,
  ) {}
}

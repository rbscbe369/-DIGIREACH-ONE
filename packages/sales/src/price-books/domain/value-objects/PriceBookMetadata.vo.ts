export class PriceBookMetadata {
  constructor(
    public readonly tenantId: string | null,
    public readonly organizationId: string | null,
    public readonly channel: string | null,
    public readonly regionId: string | null,
    public readonly priority: number,
  ) {}
}

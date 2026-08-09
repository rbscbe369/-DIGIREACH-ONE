export class SalesDimension {
  constructor(
    public readonly tenantId: string,
    public readonly organizationId: string | null = null,
    public readonly channel: string | null = null,
    public readonly region: string | null = null,
    public readonly currency: string,
  ) {}
}

export class ForecastDimension {
  constructor(
    public readonly tenantId: string,
    public readonly organizationId: string | null,
    public readonly currency: string,
  ) {}

  equals(other: ForecastDimension): boolean {
    return (
      this.tenantId === other.tenantId &&
      this.organizationId === other.organizationId &&
      this.currency === other.currency
    );
  }

  toPartitionKey(): string {
    return `${this.tenantId}:${this.organizationId || 'null'}:${this.currency}`;
  }
}

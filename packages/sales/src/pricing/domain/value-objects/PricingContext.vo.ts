export class PricingContext {
  constructor(
    public readonly tenantId: string | null,
    public readonly organizationId: string | null,
    public readonly productVersionId: string,
    public readonly priceBookId: string,
    public readonly priceBookEntryId: string | null,
    public readonly quantity: number,
    public readonly basePrice: number,
    public readonly currency: string,
    public readonly channel: string | null,
    public readonly region: string | null,
    public readonly customerReference: string | null,
    public readonly evaluationDate: Date
  ) {
    if (quantity < 0) {
      throw new Error('Quantity cannot be negative');
    }
    if (basePrice < 0) {
      throw new Error('Base price cannot be negative');
    }
  }
}

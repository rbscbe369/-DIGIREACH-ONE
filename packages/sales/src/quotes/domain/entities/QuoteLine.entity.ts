export class QuoteLine {
  constructor(
    public readonly lineId: string,
    public readonly productVersionId: string,
    public readonly quantity: number,
    public readonly basePrice: number,
    public readonly unitPrice: number,
    public readonly lineTotal: number,
    public readonly currency: string,
    public readonly priceBookId: string,
    public readonly pricingRuleIds: string[],
  ) {}

  public clone(newLineId: string): QuoteLine {
    return new QuoteLine(
      newLineId,
      this.productVersionId,
      this.quantity,
      this.basePrice,
      this.unitPrice,
      this.lineTotal,
      this.currency,
      this.priceBookId,
      [...this.pricingRuleIds],
    );
  }
}

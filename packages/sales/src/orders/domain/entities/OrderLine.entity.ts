import { Money } from '@digireach-one/shared-kernel';

export class OrderLine {
  constructor(
    public readonly lineId: string,
    public readonly productVersionId: string,
    public readonly quantity: number,
    public readonly unitPrice: Money,
    public readonly adjustments: Money,
    public readonly lineTotal: Money,
    public readonly priceBookId: string,
    public readonly priceBookEntryId: string | null,
    public readonly pricingRuleSetId: string | null,
    public readonly productName: string = 'UNKNOWN',
    public readonly sku: string = 'UNKNOWN',
  ) {}
}

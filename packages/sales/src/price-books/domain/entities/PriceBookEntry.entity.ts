import { ProductVersionReference } from '../value-objects/ProductVersionReference.vo';

export class PriceBookEntry {
  constructor(
    public readonly entryId: string,
    public readonly productVersion: ProductVersionReference,
    public readonly priceAmount: number,
    public readonly currency: string,
    public readonly unitOfMeasure: string | null,
    public isActive: boolean,
    public readonly validFrom: Date | null,
    public readonly validTo: Date | null,
    public readonly minQuantity: number | null,
    public readonly maxQuantity: number | null,
  ) {}

  public isEffectiveAt(date: Date): boolean {
    if (!this.isActive) return false;
    if (this.validFrom && this.validFrom > date) return false;
    if (this.validTo && this.validTo < date) return false;
    return true;
  }
}

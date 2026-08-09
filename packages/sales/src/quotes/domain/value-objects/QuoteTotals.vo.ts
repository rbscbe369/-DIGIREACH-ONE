export class QuoteTotals {
  constructor(
    public readonly subtotal: number,
    public readonly adjustments: number,
    public readonly grandTotal: number,
  ) {}

  public static create(subtotal: number, adjustments: number): QuoteTotals {
    // using strict integer/precision logic representation to avoid floating point issues
    const grandTotal = Math.round((subtotal + adjustments) * 100) / 100;
    return new QuoteTotals(subtotal, adjustments, grandTotal);
  }
}

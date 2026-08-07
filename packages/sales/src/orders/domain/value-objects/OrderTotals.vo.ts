import { Money } from '@digireach-one/shared-kernel';

export class OrderTotals {
  constructor(
    public readonly subtotal: Money,
    public readonly adjustments: Money,
    public readonly grandTotal: Money,
  ) {}

  public static create(subtotal: Money, adjustments: Money): OrderTotals {
    const grandTotal = subtotal.add(adjustments);
    return new OrderTotals(subtotal, adjustments, grandTotal);
  }
}

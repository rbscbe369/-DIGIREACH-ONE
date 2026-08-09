import { Money } from '@digireach-one/shared-kernel';

export class ContractLine {
  constructor(
    public readonly lineId: string,
    public readonly productVersionId: string,
    public readonly quantity: number,
    public readonly unitValue: Money,
    public readonly isRecurring: boolean,
    public readonly recurrencePeriod: 'Monthly' | 'Annual' | 'None',
  ) {
    if (quantity <= 0) throw new Error('Contract line quantity must be greater than zero');
  }

  public get lineTotal(): Money {
    return Money.fromMinorUnits(
      this.unitValue.minorUnits * this.quantity,
      this.unitValue.currencyCode,
    );
  }
}

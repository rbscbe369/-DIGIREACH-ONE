import { Money } from '@digireach-one/shared-kernel';

export class ContractTotals {
  constructor(
    public readonly totalOneTimeValue: Money,
    public readonly totalRecurringValue: Money,
    public readonly recurrencePeriod: 'Monthly' | 'Annual' | 'None',
  ) {}
}

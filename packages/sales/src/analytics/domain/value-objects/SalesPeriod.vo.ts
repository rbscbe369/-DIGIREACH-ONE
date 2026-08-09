export enum SalesPeriodType {
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Quarter = 'Quarter',
  Year = 'Year',
  Custom = 'Custom',
}

export class SalesPeriod {
  constructor(
    public readonly type: SalesPeriodType,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {
    if (startDate > endDate) {
      throw new Error('Start date cannot be after end date.');
    }
  }
}

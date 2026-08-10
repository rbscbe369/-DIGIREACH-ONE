export type DataSufficiency = 'SUFFICIENT' | 'INSUFFICIENT_DATA';

export class HistoricalCloseRate {
  public readonly rate: number | null;

  constructor(
    public readonly wonDeals: number,
    public readonly eligibleClosedDeals: number,
    public readonly sufficiency: DataSufficiency = 'SUFFICIENT',
  ) {
    if (this.eligibleClosedDeals === 0) {
      this.rate = null;
      this.sufficiency = 'INSUFFICIENT_DATA';
    } else {
      this.rate = (this.wonDeals / this.eligibleClosedDeals) * 100;
    }
  }
}

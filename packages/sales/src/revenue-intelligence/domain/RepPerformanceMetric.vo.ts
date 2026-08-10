import { Money } from '@digireach-one/shared-kernel';
import { ForecastDimension } from './ForecastDimension.vo';

export class RepPerformanceMetric {
  constructor(
    public readonly ownerId: string,
    public readonly dimension: ForecastDimension,
    public readonly totalDeals: number,
    public readonly wonDeals: number,
    public readonly lostDeals: number,
    public readonly pipelineValue: Money,
    public readonly wonRevenue: Money,
  ) {}

  get winRate(): number | null {
    const closed = this.wonDeals + this.lostDeals;
    if (closed === 0) return null;
    return (this.wonDeals / closed) * 100;
  }

  get averageDealValue(): Money | null {
    if (this.wonDeals === 0) return null;
    return Money.fromMinorUnits(
      Math.round(this.wonRevenue.minorUnits / this.wonDeals),
      this.wonRevenue.currencyCode,
    );
  }
}

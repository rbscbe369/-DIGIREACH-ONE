import { Money } from '@digireach-one/shared-kernel';
import { ForecastDimension } from './ForecastDimension.vo';
import { ForecastPeriod } from './ForecastPeriod.vo';
import { DealState } from './DealState.vo';
import { CrossCurrencyAggregationError } from './errors';

export class RevenueIntelligenceSnapshot {
  private readonly deals = new Map<string, DealState>();
  public weightedPipeline: Money;
  public wonRevenue: Money;
  public lostRevenue: Money;
  public pipelineCount: number = 0;
  public wonCount: number = 0;
  public lostCount: number = 0;

  constructor(
    public readonly id: string,
    public readonly dimension: ForecastDimension,
    public readonly period: ForecastPeriod,
  ) {
    this.weightedPipeline = Money.fromMinorUnits(0, dimension.currency);
    this.wonRevenue = Money.fromMinorUnits(0, dimension.currency);
    this.lostRevenue = Money.fromMinorUnits(0, dimension.currency);
  }

  static createEmpty(
    id: string,
    dimension: ForecastDimension,
    period: ForecastPeriod,
  ): RevenueIntelligenceSnapshot {
    return new RevenueIntelligenceSnapshot(id, dimension, period);
  }

  public applyDealState(deal: DealState): void {
    if (deal.amount.currencyCode !== this.dimension.currency) {
      throw new CrossCurrencyAggregationError(this.dimension.currency, deal.amount.currencyCode);
    }

    const existing = this.deals.get(deal.opportunityId);
    if (existing && existing.lastUpdatedAt > deal.lastUpdatedAt) {
      // Out of order: older event arrives late. Ignore.
      return;
    }

    this.deals.set(deal.opportunityId, deal);
    this.recalculate();
  }

  public removeDeal(opportunityId: string): void {
    if (this.deals.delete(opportunityId)) {
      this.recalculate();
    }
  }

  private recalculate(): void {
    let weightedPipelineMinor = 0;
    let wonRevenueMinor = 0;
    let lostRevenueMinor = 0;
    let pCount = 0;
    let wCount = 0;
    let lCount = 0;

    for (const deal of this.deals.values()) {
      if (deal.status === 'WON' || deal.stage === 'CLOSED_WON') {
        wonRevenueMinor += deal.amount.minorUnits;
        wCount++;
      } else if (deal.status === 'LOST' || deal.stage === 'CLOSED_LOST') {
        lostRevenueMinor += deal.amount.minorUnits;
        lCount++;
      } else {
        weightedPipelineMinor += Math.round((deal.amount.minorUnits * deal.probability) / 100);
        pCount++;
      }
    }

    this.weightedPipeline = Money.fromMinorUnits(weightedPipelineMinor, this.dimension.currency);
    this.wonRevenue = Money.fromMinorUnits(wonRevenueMinor, this.dimension.currency);
    this.lostRevenue = Money.fromMinorUnits(lostRevenueMinor, this.dimension.currency);
    this.pipelineCount = pCount;
    this.wonCount = wCount;
    this.lostCount = lCount;
  }
}

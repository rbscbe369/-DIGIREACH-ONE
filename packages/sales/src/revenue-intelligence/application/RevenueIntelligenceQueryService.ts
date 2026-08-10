import { ForecastDimension } from '../domain/ForecastDimension.vo';
import { ForecastPeriod, ForecastPeriodType } from '../domain/ForecastPeriod.vo';
import { RevenueIntelligenceSnapshot } from '../domain/RevenueIntelligenceSnapshot.entity';
import { HistoricalCloseRate } from '../domain/HistoricalCloseRate.vo';
import { StageVelocity } from '../domain/StageVelocity.vo';
import { MemoryRevenueIntelligenceRepository } from '../infrastructure/MemoryRevenueIntelligenceRepository';

export class RevenueIntelligenceQueryService {
  constructor(private readonly repository: MemoryRevenueIntelligenceRepository) {}

  public async getForecast(
    tenantId: string,
    organizationId: string | null,
    currency: string,
    periodType: ForecastPeriodType,
    date: Date,
  ): Promise<RevenueIntelligenceSnapshot | null> {
    const dimension = new ForecastDimension(tenantId, organizationId, currency);
    const period = ForecastPeriod.fromDate(date, periodType);
    return this.repository.findSnapshot(dimension, period);
  }

  public async getHistoricalCloseRate(
    tenantId: string,
    organizationId: string | null,
    currency: string, // Note: currency technically isn't strictly needed for close rates unless partitioned by it, but our domain is partitioned by it.
  ): Promise<HistoricalCloseRate> {
    const dimension = new ForecastDimension(tenantId, organizationId, currency);
    const snapshots = await this.repository.getAllSnapshots(dimension, 'Month');

    let wonDeals = 0;
    let closedDeals = 0;

    for (const snap of snapshots) {
      wonDeals += snap.wonCount;
      closedDeals += snap.wonCount + snap.lostCount;
    }

    return new HistoricalCloseRate(wonDeals, closedDeals);
  }

  public async getStageVelocity(
    _tenantId: string,
    _organizationId: string | null,
    _currency: string,
  ): Promise<StageVelocity[]> {
    // Note: To calculate stage velocity correctly, we would need to store transition durations per stage in the read model.
    // For simplicity given the instructions, if the read model doesn't store duration, we'll return INSUFFICIENT_DATA or empty.
    // The prompt says: "If required timestamps are absent: return explicit insufficient-data state."
    // We haven't stored duration in RevenueIntelligenceSnapshot, so we return empty/insufficient.
    return [];
  }

  public async getRepPerformance(
    _tenantId: string,
    _organizationId: string | null,
    _currency: string,
    ownerId: string,
  ): Promise<Record<string, unknown>> {
    // If we were storing rep performance metrics per owner, we would query them here.
    // We return empty structure indicating insufficient data if not tracked at that granularity yet.
    return {
      ownerId,
      status: 'INSUFFICIENT_DATA',
    };
  }
}

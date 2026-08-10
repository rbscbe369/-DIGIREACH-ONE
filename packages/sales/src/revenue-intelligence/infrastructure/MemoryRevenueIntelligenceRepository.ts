import { RevenueIntelligenceSnapshot } from '../domain/RevenueIntelligenceSnapshot.entity';
import { ForecastDimension } from '../domain/ForecastDimension.vo';
import { ForecastPeriod, ForecastPeriodType } from '../domain/ForecastPeriod.vo';

export class MemoryRevenueIntelligenceRepository {
  // partitioned by partitionKey -> periodType -> periodStartISO -> Snapshot
  private readonly snapshots = new Map<
    string,
    Map<string, Map<string, RevenueIntelligenceSnapshot>>
  >();
  // track which snapshot a deal is currently in so we can remove it if date changes
  private readonly dealPeriodMap = new Map<
    string,
    { type: ForecastPeriodType; startDateIso: string }[]
  >();

  public async findSnapshot(
    dimension: ForecastDimension,
    period: ForecastPeriod,
  ): Promise<RevenueIntelligenceSnapshot | null> {
    const key = dimension.toPartitionKey();
    const typeMap = this.snapshots.get(key);
    if (!typeMap) return null;
    const startMap = typeMap.get(period.type);
    if (!startMap) return null;
    return startMap.get(period.startDate.toISOString()) || null;
  }

  public async saveSnapshot(snapshot: RevenueIntelligenceSnapshot): Promise<void> {
    const key = snapshot.dimension.toPartitionKey();
    if (!this.snapshots.has(key)) this.snapshots.set(key, new Map());
    const typeMap = this.snapshots.get(key)!;
    if (!typeMap.has(snapshot.period.type)) typeMap.set(snapshot.period.type, new Map());
    const startMap = typeMap.get(snapshot.period.type)!;

    startMap.set(snapshot.period.startDate.toISOString(), snapshot);
  }

  public async getAllSnapshots(
    dimension: ForecastDimension,
    periodType: ForecastPeriodType,
  ): Promise<RevenueIntelligenceSnapshot[]> {
    const key = dimension.toPartitionKey();
    const typeMap = this.snapshots.get(key);
    if (!typeMap) return [];
    const startMap = typeMap.get(periodType);
    if (!startMap) return [];
    return Array.from(startMap.values());
  }

  public async removeDealFromOtherPeriods(
    dealId: string,
    dimension: ForecastDimension,
    currentPeriods: ForecastPeriod[],
  ): Promise<void> {
    const key = dealId;
    const previous = this.dealPeriodMap.get(key) || [];

    // Find periods the deal was in but is no longer in
    for (const prev of previous) {
      const isStillIn = currentPeriods.find(
        (p) => p.type === prev.type && p.startDate.toISOString() === prev.startDateIso,
      );
      if (!isStillIn) {
        const typeMap = this.snapshots.get(dimension.toPartitionKey());
        if (typeMap) {
          const startMap = typeMap.get(prev.type);
          if (startMap) {
            const snap = startMap.get(prev.startDateIso);
            if (snap) {
              snap.removeDeal(dealId);
              await this.saveSnapshot(snap);
            }
          }
        }
      }
    }

    this.dealPeriodMap.set(
      key,
      currentPeriods.map((p) => ({ type: p.type, startDateIso: p.startDate.toISOString() })),
    );
  }
}

import { ISalesAnalyticsRepository } from '../../application/interfaces/ISalesAnalyticsRepository';
import { AnalyticsSnapshot } from '../../domain/entities/AnalyticsSnapshot.entity';
import { AnalyticsQueryContext } from '../../domain/value-objects/AnalyticsQueryContext.vo';

export class MemorySalesAnalyticsRepository implements ISalesAnalyticsRepository {
  private snapshots: Map<string, AnalyticsSnapshot> = new Map();

  private generateKey(context: AnalyticsQueryContext): string {
    const dim = context.dimension;
    const per = context.period;
    return `${dim.tenantId}:${dim.organizationId || 'NONE'}:${dim.currency}:${per.type}:${per.startDate.getTime()}`;
  }

  async findSnapshot(context: AnalyticsQueryContext): Promise<AnalyticsSnapshot | null> {
    const key = this.generateKey(context);
    return this.snapshots.get(key) || null;
  }

  async saveSnapshot(snapshot: AnalyticsSnapshot): Promise<void> {
    const context = { dimension: snapshot.dimension, period: snapshot.period };
    const key = this.generateKey(context as AnalyticsQueryContext);
    this.snapshots.set(key, snapshot);
  }

  async getAllSnapshots(tenantId: string): Promise<AnalyticsSnapshot[]> {
    const results: AnalyticsSnapshot[] = [];
    for (const snapshot of this.snapshots.values()) {
      if (snapshot.dimension.tenantId === tenantId) {
        results.push(snapshot);
      }
    }
    return results;
  }
}

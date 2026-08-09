import { AnalyticsSnapshot } from '../../domain/entities/AnalyticsSnapshot.entity';
import { AnalyticsQueryContext } from '../../domain/value-objects/AnalyticsQueryContext.vo';

export interface ISalesAnalyticsRepository {
  findSnapshot(context: AnalyticsQueryContext): Promise<AnalyticsSnapshot | null>;
  saveSnapshot(snapshot: AnalyticsSnapshot): Promise<void>;
  getAllSnapshots(tenantId: string): Promise<AnalyticsSnapshot[]>;
}

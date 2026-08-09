import { ISalesAnalyticsRepository } from '../interfaces/ISalesAnalyticsRepository';
import { AnalyticsQueryContext } from '../../domain/value-objects/AnalyticsQueryContext.vo';
import { AnalyticsSnapshot } from '../../domain/entities/AnalyticsSnapshot.entity';

export class SalesAnalyticsQueryService {
  constructor(private readonly repository: ISalesAnalyticsRepository) {}

  public async getKpis(context: AnalyticsQueryContext): Promise<AnalyticsSnapshot | null> {
    return this.repository.findSnapshot(context);
  }

  public async getTenantSnapshots(tenantId: string): Promise<AnalyticsSnapshot[]> {
    return this.repository.getAllSnapshots(tenantId);
  }
}

import { ICRMStatisticsRepository } from '../../application/interfaces/i-crm-statistics.repository';
import { CRMStatistics } from '../../domain/value-objects/crm-statistics.vo';

export class MemoryCRMStatisticsRepository implements ICRMStatisticsRepository {
  private data = new Map<string, CRMStatistics>();

  async findByTenantId(tenantId: string): Promise<CRMStatistics | null> {
    return this.data.get(tenantId) || null;
  }

  async save(tenantId: string, stats: CRMStatistics): Promise<void> {
    this.data.set(tenantId, stats);
  }
}

import { CRMStatistics } from '../../domain/value-objects/crm-statistics.vo';

export interface ICRMStatisticsRepository {
  findByTenantId(tenantId: string): Promise<CRMStatistics | null>;
  save(tenantId: string, stats: CRMStatistics): Promise<void>;
}

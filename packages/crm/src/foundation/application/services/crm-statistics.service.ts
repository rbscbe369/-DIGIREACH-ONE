import { ICRMStatisticsRepository } from '../interfaces/i-crm-statistics.repository';
import { CRMStatistics } from '../../domain/value-objects/crm-statistics.vo';

export class CRMStatisticsService {
  constructor(private readonly repo: ICRMStatisticsRepository) {}

  async getStatistics(tenantId: string): Promise<CRMStatistics> {
    const stats = await this.repo.findByTenantId(tenantId);
    if (stats) return stats;

    return new CRMStatistics(0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}

import { ISalesStatisticsRepository } from '../../application/interfaces/i-sales-statistics-repository';
import { SalesStatistics } from '../../domain/entities/sales-statistics.entity';
export class MemorySalesStatisticsRepository implements ISalesStatisticsRepository {
  async getStats(): Promise<SalesStatistics | null> {
    return null;
  }
}

import { SalesStatistics } from '../../domain/entities/sales-statistics.entity';
export interface ISalesStatisticsRepository {
  getStats(): Promise<SalesStatistics | null>;
}

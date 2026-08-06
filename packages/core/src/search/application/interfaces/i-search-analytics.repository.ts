import { SearchAnalytics } from '../../domain/entities/search-analytics.entity';

export interface ISearchAnalyticsRepository {
  save(analytics: SearchAnalytics): Promise<void>;
}

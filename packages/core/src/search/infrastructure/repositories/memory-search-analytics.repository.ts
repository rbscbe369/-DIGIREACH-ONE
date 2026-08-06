import { ISearchAnalyticsRepository } from '../../application/interfaces/i-search-analytics.repository';
import { SearchAnalytics } from '../../domain/entities/search-analytics.entity';

export class MemorySearchAnalyticsRepository implements ISearchAnalyticsRepository {
  private analytics = new Map<string, SearchAnalytics>();

  async save(analytics: SearchAnalytics): Promise<void> {
    this.analytics.set(analytics.id, analytics);
  }
}

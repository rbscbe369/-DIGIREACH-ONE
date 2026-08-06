import { ISearchProvider } from '../interfaces/i-search.provider';
import { ISuggestionProvider } from '../interfaces/i-suggestion.provider';
import { ISearchAnalyticsRepository } from '../interfaces/i-search-analytics.repository';
import { SecurityFilterBuilder } from '../services/security-filter.builder';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { SearchQuery } from '../../domain/value-objects/search-query.vo';
import { SearchResult } from '../../domain/value-objects/search-result.vo';
import { SearchDocument } from '../../domain/entities/search-document.entity';
import { SearchSuggestion } from '../../domain/value-objects/search-suggestion.vo';
import { SearchRankingPolicy } from '../../domain/policies/search-ranking.policy';
import { SearchAnalytics } from '../../domain/entities/search-analytics.entity';

export class ExecuteSearchUseCase {
  constructor(
    private readonly searchProvider: ISearchProvider,
    private readonly analyticsRepo: ISearchAnalyticsRepository,
  ) {}

  async execute(
    indexName: string,
    queryText: string,
    context: ExecutionContext,
    page: number,
  ): Promise<SearchResult> {
    const start = Date.now();

    const securityFilters = SecurityFilterBuilder.buildSecurityFilters(context);
    const query = new SearchQuery(indexName, queryText, securityFilters, [], page, 20);
    const ranking = SearchRankingPolicy.getDefaultRanking();

    const result = await this.searchProvider.search(query, ranking);

    const durationMs = Date.now() - start;

    const analytics = new SearchAnalytics(
      Date.now().toString(),
      queryText,
      durationMs,
      result.totalHits,
      null,
      result.totalHits === 0,
      context.userId || 'system',
      new Date(),
    );

    await this.analyticsRepo.save(analytics);
    return result;
  }
}

export class IndexDocumentUseCase {
  constructor(private readonly searchProvider: ISearchProvider) {}

  async execute(indexName: string, document: SearchDocument): Promise<void> {
    await this.searchProvider.indexDocument(indexName, document);
  }
}

export class GetSuggestionsUseCase {
  constructor(private readonly suggestionProvider: ISuggestionProvider) {}

  async execute(indexName: string, prefix: string): Promise<SearchSuggestion[]> {
    return this.suggestionProvider.getSuggestions(indexName, prefix, 5);
  }
}

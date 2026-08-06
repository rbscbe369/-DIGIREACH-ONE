import { SearchQuery } from '../../domain/value-objects/search-query.vo';
import { SearchResult } from '../../domain/value-objects/search-result.vo';
import { SearchDocument } from '../../domain/entities/search-document.entity';
import { SearchRanking } from '../../domain/value-objects/search-ranking.vo';

export interface ISearchProvider {
  indexDocument(indexName: string, document: SearchDocument): Promise<void>;
  removeDocument(indexName: string, documentId: string): Promise<void>;
  search(query: SearchQuery, ranking: SearchRanking): Promise<SearchResult>;
}

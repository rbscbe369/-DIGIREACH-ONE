import { ISearchProvider } from '../../application/interfaces/i-search.provider';
import { SearchQuery } from '../../domain/value-objects/search-query.vo';
import { SearchResult } from '../../domain/value-objects/search-result.vo';
import { SearchDocument } from '../../domain/entities/search-document.entity';
import { SearchRanking } from '../../domain/value-objects/search-ranking.vo';

export class DummySearchProvider implements ISearchProvider {
  async indexDocument(_indexName: string, _document: SearchDocument): Promise<void> {}

  async removeDocument(_indexName: string, _documentId: string): Promise<void> {}

  async search(_query: SearchQuery, _ranking: SearchRanking): Promise<SearchResult> {
    return new SearchResult([], 0, [], 10);
  }
}

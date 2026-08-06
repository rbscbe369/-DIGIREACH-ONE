import {
  ExecuteSearchUseCase,
  IndexDocumentUseCase,
  GetSuggestionsUseCase,
} from '../use-cases/search.use-cases';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { SearchDocument } from '../../domain/entities/search-document.entity';
import { SearchResult } from '../../domain/value-objects/search-result.vo';
import { SearchSuggestion } from '../../domain/value-objects/search-suggestion.vo';

export class SearchService {
  constructor(
    private readonly searchUseCase: ExecuteSearchUseCase,
    private readonly indexUseCase: IndexDocumentUseCase,
    private readonly suggestUseCase: GetSuggestionsUseCase,
  ) {}

  async search(
    indexName: string,
    queryText: string,
    context: ExecutionContext,
    page = 1,
  ): Promise<SearchResult> {
    return this.searchUseCase.execute(indexName, queryText, context, page);
  }

  async indexDocument(indexName: string, document: SearchDocument): Promise<void> {
    await this.indexUseCase.execute(indexName, document);
  }

  async suggest(indexName: string, prefix: string): Promise<SearchSuggestion[]> {
    return this.suggestUseCase.execute(indexName, prefix);
  }
}

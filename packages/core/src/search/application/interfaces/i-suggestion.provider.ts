import { SearchSuggestion } from '../../domain/value-objects/search-suggestion.vo';

export interface ISuggestionProvider {
  getSuggestions(
    indexName: string,
    prefix: string,
    maxResults: number,
  ): Promise<SearchSuggestion[]>;
}

import { ISuggestionProvider } from '../../application/interfaces/i-suggestion.provider';
import { SearchSuggestion } from '../../domain/value-objects/search-suggestion.vo';

export class DummySuggestionProvider implements ISuggestionProvider {
  async getSuggestions(
    _indexName: string,
    _prefix: string,
    _maxResults: number,
  ): Promise<SearchSuggestion[]> {
    return [];
  }
}

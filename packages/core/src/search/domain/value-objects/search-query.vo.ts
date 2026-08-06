import { SearchFilter } from './search-filter.vo';

export class SearchQuery {
  constructor(
    public readonly indexName: string,
    public readonly queryText: string,
    public readonly filters: SearchFilter[] = [],
    public readonly facetsToFetch: string[] = [],
    public readonly page: number = 1,
    public readonly pageSize: number = 20,
  ) {}
}

import { SearchDocument } from '../entities/search-document.entity';
import { SearchFacet } from './search-facet.vo';

export class SearchResult {
  constructor(
    public readonly hits: SearchDocument[],
    public readonly totalHits: number,
    public readonly facets: SearchFacet[],
    public readonly executionTimeMs: number,
  ) {}
}

export class ProductSearchMetadata {
  constructor(
    public readonly keywords: string[],
    public readonly synonyms: string[],
    public readonly autocompleteTerms: string[],
    public readonly searchRankingBoost: number,
    public readonly facetableAttributes: string[],
    public readonly filterableAttributes: string[],
    public readonly semanticSearchTags: string[],
    public readonly embeddingReference: string | null,
  ) {}
}

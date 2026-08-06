export class SearchIndex {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly searchableFields: string[],
    public readonly filterableFields: string[],
    public readonly facetableFields: string[],
  ) {}
}

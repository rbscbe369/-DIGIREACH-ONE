export class SearchFacet {
  constructor(
    public readonly field: string,
    public readonly counts: Record<string, number>,
  ) {}
}

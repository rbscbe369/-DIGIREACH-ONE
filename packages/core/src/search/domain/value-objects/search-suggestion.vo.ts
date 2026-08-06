export class SearchSuggestion {
  constructor(
    public readonly text: string,
    public readonly score: number,
    public readonly payload: Record<string, unknown> = {},
  ) {}
}

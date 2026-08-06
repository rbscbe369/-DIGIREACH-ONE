export class SearchAnalytics {
  constructor(
    public readonly id: string,
    public readonly queryText: string,
    public readonly durationMs: number,
    public readonly resultCount: number,
    public readonly clickedDocumentId: string | null,
    public readonly isZeroResults: boolean,
    public readonly userId: string,
    public readonly timestamp: Date,
  ) {}
}

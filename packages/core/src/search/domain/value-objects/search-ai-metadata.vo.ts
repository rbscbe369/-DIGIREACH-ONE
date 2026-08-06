export class SearchAIMetadata {
  constructor(
    public readonly semanticVector: number[] = [],
    public readonly embeddingId: string | null = null,
    public readonly hybridSearchEligible: boolean = false,
    public readonly naturalLanguageQueryEligible: boolean = false,
    public readonly aiRankingScore: number | null = null,
  ) {}
}

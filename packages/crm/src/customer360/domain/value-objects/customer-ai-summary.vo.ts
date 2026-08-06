export class CustomerAISummary {
  constructor(
    public readonly executiveSummary: string | null,
    public readonly customerSummary: string | null,
    public readonly relationshipSummary: string | null,
    public readonly journeySummary: string | null,
    public readonly healthExplanation: string | null,
    public readonly riskExplanation: string | null,
    public readonly crossSellSuggestions: string[],
    public readonly upsellSuggestions: string[],
    public readonly retentionStrategy: string | null,
    public readonly nextBestAction: string | null,
    public readonly executiveBriefing: string | null,
  ) {}
}

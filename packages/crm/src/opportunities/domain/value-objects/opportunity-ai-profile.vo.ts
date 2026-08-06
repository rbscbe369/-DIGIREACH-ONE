export class OpportunityAIProfile {
  constructor(
    public readonly winProbability: number | null,
    public readonly lossProbability: number | null,
    public readonly dealHealth: string | null,
    public readonly riskScore: number | null,
    public readonly salesCoaching: string | null,
    public readonly pricingRecommendation: string | null,
    public readonly nextBestAction: string | null,
    public readonly expectedCloseConfidence: number | null,
    public readonly competitorInsights: string | null,
    public readonly conversationSummary: string | null,
  ) {}
}

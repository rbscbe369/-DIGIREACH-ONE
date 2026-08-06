export class AccountAIProfile {
  constructor(
    public readonly accountHealth: string | null = null,
    public readonly growthPotential: string | null = null,
    public readonly upsellOpportunity: string | null = null,
    public readonly crossSellOpportunity: string | null = null,
    public readonly revenuePotential: string | null = null,
    public readonly industryInsights: string | null = null,
    public readonly relationshipStrength: string | null = null,
    public readonly riskIndicator: string | null = null,
    public readonly businessSummary: string | null = null,
    public readonly nextBestAction: string | null = null,
  ) {}
}

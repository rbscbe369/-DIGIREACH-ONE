export class LeadAIProfile {
  constructor(
    public readonly intent: string | null = null,
    public readonly buyingStage: string | null = null,
    public readonly urgency: string | null = null,
    public readonly risk: string | null = null,
    public readonly nextBestAction: string | null = null,
    public readonly recommendedProduct: string | null = null,
    public readonly conversationSummary: string | null = null,
    public readonly sentiment: string | null = null,
    public readonly relationshipScore: number | null = null,
  ) {}
}

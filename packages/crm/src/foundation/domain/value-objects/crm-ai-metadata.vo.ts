export class CRMAIMetadata {
  constructor(
    public readonly leadScore: number | null = null,
    public readonly customerHealth: number | null = null,
    public readonly relationshipStrength: number | null = null,
    public readonly nextBestAction: string | null = null,
    public readonly winProbability: number | null = null,
    public readonly dealRisk: string | null = null,
    public readonly conversationSummary: string | null = null,
    public readonly emailSummary: string | null = null,
    public readonly meetingSummary: string | null = null,
    public readonly aiRecommendations: string[] = [],
  ) {}
}

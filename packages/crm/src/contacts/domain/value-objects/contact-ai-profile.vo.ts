export class ContactAIProfile {
  constructor(
    public readonly relationshipScore: number | null = null,
    public readonly communicationStyle: string | null = null,
    public readonly personalityType: string | null = null,
    public readonly buyingInfluence: string | null = null,
    public readonly preferredContactTime: string | null = null,
    public readonly sentimentTrend: string | null = null,
    public readonly risk: string | null = null,
    public readonly nextBestAction: string | null = null,
    public readonly meetingSummary: string | null = null,
    public readonly conversationSummary: string | null = null,
  ) {}
}

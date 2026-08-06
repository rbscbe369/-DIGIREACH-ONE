export class ActivityAIProfile {
  constructor(
    public readonly activitySummary: string | null,
    public readonly callSummary: string | null,
    public readonly meetingSummary: string | null,
    public readonly emailSummary: string | null,
    public readonly sentiment: string | null,
    public readonly priorityRecommendation: string | null,
    public readonly followUpRecommendation: string | null,
    public readonly completionPrediction: string | null,
    public readonly riskIndicator: string | null,
    public readonly nextBestAction: string | null,
    public readonly productivityScore: number | null,
  ) {}
}

export class LeadScore {
  constructor(
    public readonly behaviorScore: number,
    public readonly engagementScore: number,
    public readonly firmographicScore: number,
    public readonly demographicScore: number,
    public readonly aiScore: number,
    public readonly manualScore: number,
  ) {
    this.overallScore =
      behaviorScore +
      engagementScore +
      firmographicScore +
      demographicScore +
      aiScore +
      manualScore;
  }
  public readonly overallScore: number;
}

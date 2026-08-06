export class OpportunityForecast {
  constructor(
    public readonly forecastCategory:
      'PIPELINE' | 'BEST_CASE' | 'COMMIT' | 'LIKELY' | 'UPSIDE' | 'CLOSED',
    public readonly expectedCloseDate: Date | null,
    public readonly confidenceScore: number | null,
  ) {}
}

export class ScheduleAIMetadata {
  constructor(
    public readonly suggestedSchedule: string | null = null,
    public readonly executionPrediction: string | null = null,
    public readonly resourcePrediction: string | null = null,
    public readonly failureProbability: number | null = null,
    public readonly loadForecast: string | null = null,
    public readonly optimizationHint: string | null = null,
  ) {}
}

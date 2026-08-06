export class OpportunityStatistics {
  constructor(
    public readonly daysOpen: number,
    public readonly timesStageChanged: number,
    public readonly totalActivities: number,
  ) {}
}

export class PipelineGoal {
  constructor(
    public readonly revenueGoal: number,
    public readonly dealGoal: number,
    public readonly activityGoal: number,
    public readonly conversionGoal: number,
    public readonly winRateGoal: number,
    public readonly monthlyGoal: number,
    public readonly quarterlyGoal: number,
    public readonly annualGoal: number,
  ) {}
}

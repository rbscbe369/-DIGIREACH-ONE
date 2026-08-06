export class PipelineAnalytics {
  constructor(
    public readonly averageStageDuration: number,
    public readonly averageSalesCycle: number,
    public readonly stageConversion: Record<string, number>,
    public readonly winRate: number,
    public readonly lossRate: number,
    public readonly velocity: number,
    public readonly forecastAccuracy: number,
    public readonly bottlenecks: string[],
    public readonly stalledOpportunities: number,
    public readonly pipelineAging: number,
  ) {}
}

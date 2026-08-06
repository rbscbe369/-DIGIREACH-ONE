export class PipelineAIProfile {
  constructor(
    public readonly pipelineHealth: number | null,
    public readonly stageHealth: Record<string, number>,
    public readonly conversionPrediction: number | null,
    public readonly pipelineRisk: number | null,
    public readonly forecastConfidence: number | null,
    public readonly stageOptimization: string | null,
    public readonly bottleneckDetection: string | null,
    public readonly nextBestAction: string | null,
    public readonly coachingRecommendation: string | null,
  ) {}
}

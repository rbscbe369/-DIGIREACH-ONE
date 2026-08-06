export class PipelineForecast {
  constructor(
    public readonly pipelineId: string,
    public readonly expectedTotalRevenue: number,
  ) {}
}

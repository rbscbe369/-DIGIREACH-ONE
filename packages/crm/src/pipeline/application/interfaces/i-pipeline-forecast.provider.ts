import { PipelineForecast } from '../../domain/value-objects/pipeline-forecast.vo';

export interface IPipelineForecastProvider {
  generateForecast(pipelineId: string): Promise<PipelineForecast>;
}

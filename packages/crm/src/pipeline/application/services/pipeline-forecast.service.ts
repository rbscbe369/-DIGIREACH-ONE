import { IPipelineForecastProvider } from '../interfaces/i-pipeline-forecast.provider';
import { PipelineForecast } from '../../domain/value-objects/pipeline-forecast.vo';

export class PipelineForecastService {
  constructor(private readonly provider: IPipelineForecastProvider) {}
  async forecast(pipelineId: string): Promise<PipelineForecast> {
    return this.provider.generateForecast(pipelineId);
  }
}

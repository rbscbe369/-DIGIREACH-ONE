import { IPipelineForecastProvider } from '../../application/interfaces/i-pipeline-forecast.provider';
import { PipelineForecast } from '../../domain/value-objects/pipeline-forecast.vo';

export class DummyForecastProvider implements IPipelineForecastProvider {
  async generateForecast(pipelineId: string): Promise<PipelineForecast> {
    return new PipelineForecast(pipelineId, 0);
  }
}

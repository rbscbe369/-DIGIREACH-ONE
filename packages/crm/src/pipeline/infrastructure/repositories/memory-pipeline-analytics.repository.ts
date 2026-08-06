import { IPipelineAnalyticsRepository } from '../../application/interfaces/i-pipeline-analytics.repository';
import { PipelineAnalytics } from '../../domain/value-objects/pipeline-analytics.vo';

export class MemoryPipelineAnalyticsRepository implements IPipelineAnalyticsRepository {
  async getAnalytics(_pipelineId: string): Promise<PipelineAnalytics | null> {
    return null;
  }
}

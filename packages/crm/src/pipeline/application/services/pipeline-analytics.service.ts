import { IPipelineAnalyticsRepository } from '../interfaces/i-pipeline-analytics.repository';
import { PipelineAnalytics } from '../../domain/value-objects/pipeline-analytics.vo';

export class PipelineAnalyticsService {
  constructor(private readonly repo: IPipelineAnalyticsRepository) {}
  async getAnalytics(pipelineId: string): Promise<PipelineAnalytics | null> {
    return this.repo.getAnalytics(pipelineId);
  }
}

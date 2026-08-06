import { PipelineAnalytics } from '../../domain/value-objects/pipeline-analytics.vo';

export interface IPipelineAnalyticsRepository {
  getAnalytics(pipelineId: string): Promise<PipelineAnalytics | null>;
}

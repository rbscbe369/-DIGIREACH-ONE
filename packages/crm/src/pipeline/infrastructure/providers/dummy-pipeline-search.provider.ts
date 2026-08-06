import { IPipelineSearchProvider } from '../../application/interfaces/i-pipeline-search.provider';
import { Pipeline } from '../../domain/entities/pipeline.entity';

export class DummyPipelineSearchProvider implements IPipelineSearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Pipeline[]> {
    return [];
  }
}

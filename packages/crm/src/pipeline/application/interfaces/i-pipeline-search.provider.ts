import { Pipeline } from '../../domain/entities/pipeline.entity';

export interface IPipelineSearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Pipeline[]>;
}

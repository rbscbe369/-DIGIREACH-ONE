import { Pipeline } from '../../domain/entities/pipeline.entity';

export interface IPipelineRepository {
  findById(id: string): Promise<Pipeline | null>;
  save(pipeline: Pipeline): Promise<void>;
  delete(id: string): Promise<void>;
}

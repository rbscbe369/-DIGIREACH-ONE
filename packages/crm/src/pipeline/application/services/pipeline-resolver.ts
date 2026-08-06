import { Pipeline } from '../../domain/entities/pipeline.entity';

export class PipelineResolver {
  static resolvePipeline(data: unknown): Pipeline {
    return data as Pipeline;
  }
}

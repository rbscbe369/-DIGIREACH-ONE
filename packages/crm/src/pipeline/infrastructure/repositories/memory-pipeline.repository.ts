import { IPipelineRepository } from '../../application/interfaces/i-pipeline.repository';
import { Pipeline } from '../../domain/entities/pipeline.entity';

export class MemoryPipelineRepository implements IPipelineRepository {
  private pipelines = new Map<string, Pipeline>();

  async findById(id: string): Promise<Pipeline | null> {
    return this.pipelines.get(id) || null;
  }

  async save(pipeline: Pipeline): Promise<void> {
    this.pipelines.set(pipeline.id, pipeline);
  }

  async delete(id: string): Promise<void> {
    this.pipelines.delete(id);
  }
}

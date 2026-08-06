import { IPipelineRepository } from '../interfaces/i-pipeline.repository';
import { Pipeline } from '../../domain/entities/pipeline.entity';

export class PipelineService {
  constructor(private readonly repo: IPipelineRepository) {}

  async getPipeline(id: string): Promise<Pipeline | null> {
    return this.repo.findById(id);
  }

  async savePipeline(pipeline: Pipeline): Promise<void> {
    await this.repo.save(pipeline);
  }

  async deletePipeline(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

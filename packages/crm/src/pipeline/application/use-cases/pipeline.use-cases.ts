import { PipelineService } from '../services/pipeline.service';
import { Pipeline } from '../../domain/entities/pipeline.entity';
import { PipelineStageService } from '../services/pipeline-stage.service';
import { PipelineStage } from '../../domain/entities/pipeline-stage.entity';
import { PipelineAssignmentService } from '../services/pipeline-assignment.service';
import { PipelineAssignment } from '../../domain/value-objects/pipeline-assignment.vo';
import { IPipelineSearchProvider } from '../interfaces/i-pipeline-search.provider';

export class CreatePipelineUseCase {
  constructor(private readonly service: PipelineService) {}
  async execute(pipeline: Pipeline): Promise<void> {
    await this.service.savePipeline(pipeline);
  }
}

export class UpdatePipelineUseCase {
  constructor(private readonly service: PipelineService) {}
  async execute(pipeline: Pipeline): Promise<void> {
    await this.service.savePipeline(pipeline);
  }
}

export class DeletePipelineUseCase {
  constructor(private readonly service: PipelineService) {}
  async execute(id: string): Promise<void> {
    await this.service.deletePipeline(id);
  }
}

export class AssignPipelineUseCase {
  constructor(
    private readonly service: PipelineService,
    private readonly assignService: PipelineAssignmentService,
  ) {}
  async execute(pipelineId: string, ownerId: string): Promise<void> {
    const pipeline = await this.service.getPipeline(pipelineId);
    if (pipeline) {
      this.assignService.assignPipeline(pipeline, new PipelineAssignment(ownerId, new Date()));
      await this.service.savePipeline(pipeline);
    }
  }
}

export class CreateStageUseCase {
  constructor(
    private readonly service: PipelineService,
    private readonly stageService: PipelineStageService,
  ) {}
  async execute(pipelineId: string, stage: PipelineStage): Promise<void> {
    const pipeline = await this.service.getPipeline(pipelineId);
    if (pipeline) {
      this.stageService.addStage(pipeline, stage);
      await this.service.savePipeline(pipeline);
    }
  }
}

export class MoveStageUseCase {
  constructor(private readonly service: PipelineService) {}
  async execute(pipelineId: string, _stageId: string, _newOrder: number): Promise<void> {
    const pipeline = await this.service.getPipeline(pipelineId);
    if (pipeline) {
      // Logic to adjust orders
      await this.service.savePipeline(pipeline);
    }
  }
}

export class DeleteStageUseCase {
  constructor(private readonly service: PipelineService) {}
  async execute(pipelineId: string, stageId: string): Promise<void> {
    const pipeline = await this.service.getPipeline(pipelineId);
    if (pipeline) {
      pipeline.stages = pipeline.stages.filter((s) => s.id !== stageId);
      await this.service.savePipeline(pipeline);
    }
  }
}

export class SearchPipelinesUseCase {
  constructor(private readonly searchProvider: IPipelineSearchProvider) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Pipeline[]> {
    return this.searchProvider.search(query, metadata);
  }
}

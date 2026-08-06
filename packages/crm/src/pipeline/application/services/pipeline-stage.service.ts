import { Pipeline } from '../../domain/entities/pipeline.entity';
import { PipelineStage } from '../../domain/entities/pipeline-stage.entity';

export class PipelineStageService {
  addStage(pipeline: Pipeline, stage: PipelineStage): void {
    pipeline.stages.push(stage);
  }
}

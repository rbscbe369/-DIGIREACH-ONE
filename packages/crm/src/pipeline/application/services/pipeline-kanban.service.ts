import { Pipeline } from '../../domain/entities/pipeline.entity';
import { PipelineKanban } from '../../domain/value-objects/pipeline-kanban.vo';

export class PipelineKanbanService {
  updateKanbanMetadata(pipeline: Pipeline, kanban: PipelineKanban): void {
    pipeline.kanbanMetadata = kanban;
  }
}

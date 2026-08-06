import { Pipeline } from '../../domain/entities/pipeline.entity';
import { PipelineAssignment } from '../../domain/value-objects/pipeline-assignment.vo';

export class PipelineAssignmentService {
  assignPipeline(pipeline: Pipeline, assignment: PipelineAssignment): void {
    pipeline.assignments.push(assignment);
  }
}

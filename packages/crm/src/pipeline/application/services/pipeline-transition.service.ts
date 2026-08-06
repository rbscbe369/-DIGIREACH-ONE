import { Pipeline } from '../../domain/entities/pipeline.entity';
import { PipelineTransition } from '../../domain/value-objects/pipeline-transition.vo';

export class PipelineTransitionService {
  addTransition(pipeline: Pipeline, transition: PipelineTransition): void {
    pipeline.transitions.push(transition);
  }
}

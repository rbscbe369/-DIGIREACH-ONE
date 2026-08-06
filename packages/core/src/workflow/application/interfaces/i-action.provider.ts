import { WorkflowAction } from '../../domain/entities/workflow-action.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';

export interface IActionProvider {
  execute(action: WorkflowAction, context: WorkflowContext): Promise<void>;
  compensate(action: WorkflowAction, context: WorkflowContext): Promise<void>;
}

import { IActionProvider } from '../../application/interfaces/i-action.provider';
import { WorkflowAction } from '../../domain/entities/workflow-action.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';

export class DummyActionProvider implements IActionProvider {
  async execute(_action: WorkflowAction, _context: WorkflowContext): Promise<void> {}
  async compensate(_action: WorkflowAction, _context: WorkflowContext): Promise<void> {}
}

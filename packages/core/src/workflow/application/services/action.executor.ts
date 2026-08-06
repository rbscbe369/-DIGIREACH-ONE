import { IActionProvider } from '../interfaces/i-action.provider';
import { WorkflowAction } from '../../domain/entities/workflow-action.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';

export class ActionExecutor {
  constructor(private readonly actionProvider: IActionProvider) {}

  async executeAll(actions: WorkflowAction[], context: WorkflowContext): Promise<void> {
    for (const action of actions) {
      if (!action.isCompensation) {
        await this.actionProvider.execute(action, context);
      }
    }
  }

  async compensateAll(actions: WorkflowAction[], context: WorkflowContext): Promise<void> {
    for (const action of actions) {
      if (action.isCompensation) {
        await this.actionProvider.compensate(action, context);
      }
    }
  }
}

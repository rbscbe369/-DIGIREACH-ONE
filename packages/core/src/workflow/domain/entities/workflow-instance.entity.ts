import { WorkflowStatus } from '../value-objects/workflow-status.vo';
import { WorkflowContext } from '../value-objects/workflow-context.vo';
import { WorkflowTask } from './workflow-task.entity';

export class WorkflowInstance {
  constructor(
    public readonly id: string,
    public readonly definitionId: string,
    public readonly versionId: string,
    public readonly context: WorkflowContext,
    public readonly status: WorkflowStatus,
    public readonly currentStepId: string | null,
    public readonly tasks: WorkflowTask[],
    public readonly createdAt: Date,
    public readonly completedAt: Date | null = null,
  ) {}
}

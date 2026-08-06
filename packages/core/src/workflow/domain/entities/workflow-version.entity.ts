import { WorkflowStep } from './workflow-step.entity';
import { WorkflowTransition } from './workflow-transition.entity';
import { WorkflowVariable } from '../value-objects/workflow-variable.vo';

export class WorkflowVersion {
  constructor(
    public readonly id: string,
    public readonly definitionId: string,
    public readonly versionNumber: number,
    public readonly steps: WorkflowStep[],
    public readonly transitions: WorkflowTransition[],
    public readonly variables: WorkflowVariable[],
    public readonly initialStepId: string,
    public readonly createdAt: Date,
    public readonly publishedAt: Date | null = null,
    public readonly isArchived: boolean = false,
  ) {}
}

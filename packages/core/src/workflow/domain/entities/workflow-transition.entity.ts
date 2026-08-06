import { TransitionRule } from '../value-objects/transition-rule.vo';
import { WorkflowAction } from './workflow-action.entity';

export class WorkflowTransition {
  constructor(
    public readonly id: string,
    public readonly sourceStepId: string,
    public readonly targetStepId: string,
    public readonly rule: TransitionRule | null,
    public readonly preActions: WorkflowAction[] = [],
    public readonly postActions: WorkflowAction[] = [],
  ) {}
}

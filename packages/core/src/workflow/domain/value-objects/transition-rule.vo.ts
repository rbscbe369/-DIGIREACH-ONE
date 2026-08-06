import { WorkflowCondition } from '../entities/workflow-condition.entity';

export class TransitionRule {
  constructor(
    public readonly name: string,
    public readonly conditions: WorkflowCondition[],
    public readonly evaluateAll: boolean = true,
  ) {}
}

import { WorkflowAssignment } from './workflow-assignment.entity';
import { WorkflowAction } from './workflow-action.entity';
import { SLA } from '../value-objects/sla.vo';
import { ExecutionMode } from '../value-objects/execution-mode.vo';
import { ApprovalType } from '../value-objects/approval-type.vo';

export class WorkflowStep {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly executionMode: ExecutionMode,
    public readonly assignments: WorkflowAssignment[],
    public readonly approvalType: ApprovalType | null,
    public readonly sla: SLA | null,
    public readonly entryActions: WorkflowAction[],
    public readonly exitActions: WorkflowAction[],
  ) {}
}

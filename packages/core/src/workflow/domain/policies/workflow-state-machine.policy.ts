import { WorkflowStatus } from '../value-objects/workflow-status.vo';

export class WorkflowStateMachinePolicy {
  static canTransition(current: WorkflowStatus, next: WorkflowStatus): boolean {
    const transitions: Record<WorkflowStatus, WorkflowStatus[]> = {
      [WorkflowStatus.DRAFT]: [WorkflowStatus.READY, WorkflowStatus.ARCHIVED],
      [WorkflowStatus.READY]: [WorkflowStatus.RUNNING, WorkflowStatus.ARCHIVED],
      [WorkflowStatus.RUNNING]: [
        WorkflowStatus.WAITING,
        WorkflowStatus.APPROVAL_PENDING,
        WorkflowStatus.COMPLETED,
        WorkflowStatus.FAILED,
        WorkflowStatus.CANCELLED,
      ],
      [WorkflowStatus.WAITING]: [
        WorkflowStatus.RUNNING,
        WorkflowStatus.CANCELLED,
        WorkflowStatus.FAILED,
      ],
      [WorkflowStatus.APPROVAL_PENDING]: [
        WorkflowStatus.RUNNING,
        WorkflowStatus.ESCALATED,
        WorkflowStatus.COMPLETED,
        WorkflowStatus.CANCELLED,
        WorkflowStatus.FAILED,
      ],
      [WorkflowStatus.ESCALATED]: [
        WorkflowStatus.RUNNING,
        WorkflowStatus.CANCELLED,
        WorkflowStatus.FAILED,
      ],
      [WorkflowStatus.COMPLETED]: [WorkflowStatus.ARCHIVED],
      [WorkflowStatus.CANCELLED]: [WorkflowStatus.ARCHIVED],
      [WorkflowStatus.FAILED]: [WorkflowStatus.ARCHIVED],
      [WorkflowStatus.ARCHIVED]: [],
    };

    return transitions[current].includes(next);
  }
}

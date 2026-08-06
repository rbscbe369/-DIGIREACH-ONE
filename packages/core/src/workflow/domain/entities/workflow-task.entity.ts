import { WorkflowStatus } from '../value-objects/workflow-status.vo';
import { WorkflowAssignment } from './workflow-assignment.entity';

export class WorkflowTask {
  constructor(
    public readonly id: string,
    public readonly instanceId: string,
    public readonly stepId: string,
    public readonly assignment: WorkflowAssignment,
    public readonly status: WorkflowStatus,
    public readonly assignedToUserId: string | null,
    public readonly createdAt: Date,
    public readonly completedAt: Date | null = null,
    public readonly resolution: 'APPROVED' | 'REJECTED' | 'COMPLETED' | null = null,
  ) {}
}

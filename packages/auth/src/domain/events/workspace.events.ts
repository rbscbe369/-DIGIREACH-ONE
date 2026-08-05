import { DomainEvent } from './domain.event';
import { WorkspaceId, UserId, HierarchyNodeId } from '../value-objects/id.vo';

export class WorkspaceAssigned implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkspaceAssigned';
  constructor(
    public readonly workspaceId: WorkspaceId, 
    public readonly userId: UserId, 
    public readonly nodeId: HierarchyNodeId
  ) {}
}
import { Entity } from './entity';
import { WorkspaceId, UserId, HierarchyNodeId, PersonaId } from '../value-objects/id.vo';
import { WorkspaceAssigned } from '../events/workspace.events';

export class Workspace extends Entity<WorkspaceId> {
  private _isActive: boolean;
  
  constructor(
    id: WorkspaceId,
    public readonly userId: UserId,
    public readonly hierarchyNodeId: HierarchyNodeId,
    public readonly personaId: PersonaId,
    isActive: boolean = true
  ) {
    super(id);
    this._isActive = isActive;
  }

  public static assign(
    id: WorkspaceId, userId: UserId, nodeId: HierarchyNodeId, personaId: PersonaId
  ): Workspace {
    const ws = new Workspace(id, userId, nodeId, personaId, true);
    ws.addDomainEvent(new WorkspaceAssigned(id, userId, nodeId));
    return ws;
  }

  get isActive(): boolean { return this._isActive; }

  public deactivate(): void {
    this._isActive = false;
  }
}
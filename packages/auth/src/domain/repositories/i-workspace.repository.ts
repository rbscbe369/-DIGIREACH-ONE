import { Workspace } from '../entities/workspace.entity';
import { WorkspaceId, UserId, HierarchyNodeId } from '../value-objects/id.vo';

export interface IWorkspaceRepository {
  findById(id: WorkspaceId): Promise<Workspace | null>;
  findByUser(userId: UserId): Promise<Workspace[]>;
  findByUserAndNode(userId: UserId, nodeId: HierarchyNodeId): Promise<Workspace | null>;
  save(workspace: Workspace): Promise<void>;
}
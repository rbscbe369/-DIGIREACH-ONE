import { WorkspaceModel } from '../prisma/interfaces';
import { Workspace } from '../../../domain/entities/workspace.entity';
import { WorkspaceId, UserId, HierarchyNodeId, PersonaId } from '../../../domain/value-objects/id.vo';

export class WorkspaceMapper {
  static toDomain(raw: WorkspaceModel): Workspace {
    return new Workspace(
      new WorkspaceId(raw.id),
      new UserId(raw.userId),
      new HierarchyNodeId(raw.hierarchyNodeId),
      new PersonaId(raw.personaId),
      raw.isActive
    );
  }

  static toPersistence(ws: Workspace): WorkspaceModel {
    return {
      id: ws.id.value,
      userId: ws.userId.value,
      hierarchyNodeId: ws.hierarchyNodeId.value,
      personaId: ws.personaId.value,
      isActive: ws.isActive
    };
  }
}
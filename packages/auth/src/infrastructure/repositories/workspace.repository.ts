import { BaseRepository } from './base.repository';
import { IPrismaClient, WorkspaceModel } from '../persistence/prisma/interfaces';
import { IWorkspaceRepository } from '../../domain/repositories/i-workspace.repository';
import { Workspace } from '../../domain/entities/workspace.entity';
import { WorkspaceId, UserId, HierarchyNodeId } from '../../domain/value-objects/id.vo';
import { WorkspaceMapper } from '../persistence/mappers/workspace.mapper';

export class WorkspaceRepository extends BaseRepository<Workspace, WorkspaceId> implements IWorkspaceRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }


  async findById(id: WorkspaceId): Promise<Workspace | null> {
    const data = await this.prisma.workspace.findUnique({ where: { id: id.value } });
    return data ? WorkspaceMapper.toDomain(data) : null;
  }

  async findByUser(userId: UserId): Promise<Workspace[]> {
    const data = await this.prisma.workspace.findMany({ where: { userId: userId.value } });
    return data.map((d: WorkspaceModel) => WorkspaceMapper.toDomain(d));
  }

  async findByUserAndNode(userId: UserId, nodeId: HierarchyNodeId): Promise<Workspace | null> {
    const data = await this.prisma.workspace.findFirst({
      where: { userId: userId.value, hierarchyNodeId: nodeId.value }
    });
    return data ? WorkspaceMapper.toDomain(data) : null;
  }

  async save(workspace: Workspace): Promise<void> {
    const data = WorkspaceMapper.toPersistence(workspace);
    await this.prisma.workspace.upsert({
      where: { id: data.id },
      update: data,
      create: data
    });
  }
}
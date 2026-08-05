import { BaseRepository } from './base.repository';
import { IPrismaClient, HierarchyNodeModel } from '../persistence/prisma/interfaces';
import { IHierarchyNodeRepository } from '../../domain/repositories/i-hierarchy-node.repository';
import { HierarchyNode } from '../../domain/entities/hierarchy-node.entity';
import { HierarchyNodeId, OrganizationId } from '../../domain/value-objects/id.vo';
import { HierarchyNodeMapper } from '../persistence/mappers/hierarchy-node.mapper';

export class HierarchyNodeRepository extends BaseRepository<HierarchyNode, HierarchyNodeId> implements IHierarchyNodeRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }


  async findById(id: HierarchyNodeId): Promise<HierarchyNode | null> {
    const data = await this.prisma.hierarchyNode.findUnique({ where: { id: id.value } });
    return data ? HierarchyNodeMapper.toDomain(data) : null;
  }

  async findChildren(parentId: HierarchyNodeId): Promise<HierarchyNode[]> {
    const data = await this.prisma.hierarchyNode.findMany({ where: { parentNodeId: parentId.value } });
    return data.map((d: HierarchyNodeModel) => HierarchyNodeMapper.toDomain(d));
  }

  async findByOrganization(orgId: OrganizationId): Promise<HierarchyNode[]> {
    const data = await this.prisma.hierarchyNode.findMany({ where: { organizationId: orgId.value } });
    return data.map((d: HierarchyNodeModel) => HierarchyNodeMapper.toDomain(d));
  }

  async save(node: HierarchyNode): Promise<void> {
    const data = HierarchyNodeMapper.toPersistence(node);
    await this.prisma.hierarchyNode.upsert({
      where: { id: data.id },
      update: data,
      create: data
    });
  }
}
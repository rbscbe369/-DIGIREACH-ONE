import { HierarchyNodeModel } from '../prisma/interfaces';
import { HierarchyNode } from '../../../domain/entities/hierarchy-node.entity';
import { HierarchyNodeId, OrganizationId } from '../../../domain/value-objects/id.vo';

export class HierarchyNodeMapper {
  static toDomain(raw: HierarchyNodeModel): HierarchyNode {
    return new HierarchyNode(
      new HierarchyNodeId(raw.id),
      new OrganizationId(raw.organizationId),
      raw.name,
      raw.nodeType,
      raw.parentNodeId ? new HierarchyNodeId(raw.parentNodeId) : null,
      raw.isActive
    );
  }

  static toPersistence(node: HierarchyNode): HierarchyNodeModel {
    return {
      id: node.id.value,
      organizationId: node.organizationId.value,
      name: node.name,
      nodeType: node.nodeType,
      parentNodeId: node.parentNodeId ? node.parentNodeId.value : null,
      isActive: node.isActive
    };
  }
}
import { HierarchyNode } from '../entities/hierarchy-node.entity';
import { HierarchyNodeId, OrganizationId } from '../value-objects/id.vo';

export interface IHierarchyNodeRepository {
  findById(id: HierarchyNodeId): Promise<HierarchyNode | null>;
  findChildren(parentId: HierarchyNodeId): Promise<HierarchyNode[]>;
  findByOrganization(organizationId: OrganizationId): Promise<HierarchyNode[]>;
  save(node: HierarchyNode): Promise<void>;
}

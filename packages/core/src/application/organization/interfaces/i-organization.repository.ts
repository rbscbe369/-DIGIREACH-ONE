import { Organization } from '../../../domain/organization/entities/organization.entity';
import { OrganizationNode } from '../../../domain/organization/entities/organization-node.entity';

export interface IOrganizationRepository {
  findById(id: string): Promise<Organization | null>;
  save(org: Organization): Promise<void>;

  findNodeById(id: string): Promise<OrganizationNode | null>;
  saveNode(node: OrganizationNode): Promise<void>;
  findChildren(parentId: string): Promise<OrganizationNode[]>;
}

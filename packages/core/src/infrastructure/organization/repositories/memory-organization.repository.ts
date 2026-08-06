import { IOrganizationRepository } from '../../../application/organization/interfaces/i-organization.repository';
import { Organization } from '../../../domain/organization/entities/organization.entity';
import { OrganizationNode } from '../../../domain/organization/entities/organization-node.entity';

export class MemoryOrganizationRepository implements IOrganizationRepository {
  private orgs = new Map<string, Organization>();
  private nodes = new Map<string, OrganizationNode>();

  async findById(id: string): Promise<Organization | null> {
    return this.orgs.get(id) || null;
  }

  async save(org: Organization): Promise<void> {
    this.orgs.set(org.id, org);
  }

  async findNodeById(id: string): Promise<OrganizationNode | null> {
    return this.nodes.get(id) || null;
  }

  async saveNode(node: OrganizationNode): Promise<void> {
    this.nodes.set(node.id, node);
  }

  async findChildren(parentId: string): Promise<OrganizationNode[]> {
    return Array.from(this.nodes.values()).filter((n) => n.parentId === parentId);
  }
}

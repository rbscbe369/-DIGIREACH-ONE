import { IOrganizationRepository } from '../interfaces/i-organization.repository';
import { OrganizationNode } from '../../../domain/organization/entities/organization-node.entity';

export class OrganizationResolver {
  constructor(private readonly repo: IOrganizationRepository) {}

  async resolveSubtree(rootNodeId: string): Promise<OrganizationNode[]> {
    const rootNode = await this.repo.findNodeById(rootNodeId);
    if (!rootNode) return [];

    // In a real implementation with materialized paths, this would be a single LIKE query:
    // SELECT * FROM nodes WHERE materializedPath LIKE 'rootNode.materializedPath%'

    return [rootNode]; // Placeholder
  }
}

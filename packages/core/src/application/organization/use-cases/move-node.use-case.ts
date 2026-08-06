import { IOrganizationRepository } from '../interfaces/i-organization.repository';
import { HierarchyValidator } from '../../../domain/organization/policies/hierarchy-validator';
import { OrganizationNode } from '../../../domain/organization/entities/organization-node.entity';

export class MoveOrganizationNodeUseCase {
  constructor(
    private readonly repo: IOrganizationRepository,
    private readonly validator: HierarchyValidator,
  ) {}

  async execute(nodeId: string, newParentId: string): Promise<OrganizationNode> {
    const nodeToMove = await this.repo.findNodeById(nodeId);
    if (!nodeToMove) throw new Error('Node not found');

    const targetParent = await this.repo.findNodeById(newParentId);
    if (!targetParent) throw new Error('Target parent not found');

    this.validator.validateMove(nodeToMove, targetParent);

    const newPath = targetParent.materializedPath + '/' + nodeToMove.id;
    const newDepth = targetParent.depth + 1;

    const updatedNode = new OrganizationNode(
      nodeToMove.id,
      nodeToMove.organizationId,
      newParentId,
      nodeToMove.nodeType,
      nodeToMove.name,
      newPath,
      newDepth,
      nodeToMove.isActive,
    );

    await this.repo.saveNode(updatedNode);
    return updatedNode;
  }
}

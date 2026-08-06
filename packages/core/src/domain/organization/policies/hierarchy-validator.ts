import { OrganizationNode } from '../entities/organization-node.entity';

export class HierarchyValidator {
  validateMove(nodeToMove: OrganizationNode, targetParent: OrganizationNode): boolean {
    if (targetParent.materializedPath.startsWith(nodeToMove.materializedPath)) {
      throw new Error('Cyclical reference detected: Cannot move a node under its own descendant.');
    }
    return true;
  }
}

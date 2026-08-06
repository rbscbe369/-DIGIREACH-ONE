import { WorkflowAssignment } from '../../domain/entities/workflow-assignment.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';
import { AssignmentType } from '../../domain/value-objects/assignment-type.vo';

export class AssignmentResolver {
  static resolveUserIds(assignment: WorkflowAssignment, _context: WorkflowContext): string[] {
    switch (assignment.type) {
      case AssignmentType.USER:
        return [assignment.referenceId];
      case AssignmentType.ROLE:
      case AssignmentType.TEAM:
      case AssignmentType.DEPARTMENT:
      case AssignmentType.ORGANIZATION_NODE:
      case AssignmentType.EXPRESSION:
      case AssignmentType.AI_RECOMMENDATION:
        // Placeholder for dynamic organization resolution
        return [];
      default:
        return [];
    }
  }
}

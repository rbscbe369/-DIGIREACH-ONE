import { AccessPolicy } from '../../domain/value-objects/access-policy.vo';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class AccessEvaluator {
  canAccess(policy: AccessPolicy, context: ExecutionContext): boolean {
    if (context.userId && policy.allowedUserIds.includes(context.userId)) return true;
    if (context.organizationId && policy.allowedOrganizationIds.includes(context.organizationId))
      return true;

    for (const roleId of context.roleIds) {
      if (policy.allowedRoleIds.includes(roleId)) return true;
    }

    return false;
  }
}

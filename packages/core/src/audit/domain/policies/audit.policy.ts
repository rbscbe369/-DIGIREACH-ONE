import { AuditCategory } from '../value-objects/audit-category.vo';
import { AuditStoragePolicy } from '../value-objects/audit-storage-policy.vo';

export class AuditPolicy {
  static determineStoragePolicy(category: AuditCategory): AuditStoragePolicy {
    switch (category) {
      case AuditCategory.SECURITY:
        return AuditStoragePolicy.HOT;
      case AuditCategory.DATA:
      case AuditCategory.USER:
        return AuditStoragePolicy.WARM;
      case AuditCategory.SYSTEM:
      case AuditCategory.INTEGRATION:
      case AuditCategory.WORKFLOW:
      case AuditCategory.CONFIGURATION:
      default:
        return AuditStoragePolicy.COLD;
    }
  }
}

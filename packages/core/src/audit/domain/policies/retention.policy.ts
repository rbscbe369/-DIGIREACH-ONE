import { ComplianceMetadata } from '../value-objects/compliance-metadata.vo';

export class RetentionPolicy {
  static calculateRetentionDays(compliance: ComplianceMetadata): number {
    if (compliance.isHipaa) return 2190; // 6 years
    if (compliance.isGdpr) return 1825; // 5 years
    if (compliance.isSoc2) return 365; // 1 year
    if (compliance.isPciDss) return 365; // 1 year

    // Default 90 days for standard internal logs
    return 90;
  }
}

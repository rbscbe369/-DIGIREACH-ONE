import { CRMConfiguration } from '../../domain/value-objects/crm-configuration.vo';

export class CRMValidators {
  static validateConfig(raw: Record<string, unknown>): CRMConfiguration {
    // Scaffold validation logic
    return new CRMConfiguration(
      (raw.general as Record<string, unknown>) || {},
      (raw.leads as Record<string, unknown>) || {},
      (raw.pipeline as Record<string, unknown>) || {},
      (raw.activities as Record<string, unknown>) || {},
      (raw.ai as Record<string, unknown>) || {},
      (raw.automation as Record<string, unknown>) || {},
      (raw.notifications as Record<string, unknown>) || {},
      (raw.search as Record<string, unknown>) || {},
    );
  }
}

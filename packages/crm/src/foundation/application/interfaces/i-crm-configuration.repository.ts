import { CRMConfiguration } from '../../domain/value-objects/crm-configuration.vo';

export interface ICRMConfigurationRepository {
  findByTenantId(tenantId: string): Promise<CRMConfiguration | null>;
  save(tenantId: string, config: CRMConfiguration): Promise<void>;
}

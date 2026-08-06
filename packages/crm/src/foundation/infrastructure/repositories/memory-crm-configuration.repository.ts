import { ICRMConfigurationRepository } from '../../application/interfaces/i-crm-configuration.repository';
import { CRMConfiguration } from '../../domain/value-objects/crm-configuration.vo';

export class MemoryCRMConfigurationRepository implements ICRMConfigurationRepository {
  private data = new Map<string, CRMConfiguration>();

  async findByTenantId(tenantId: string): Promise<CRMConfiguration | null> {
    return this.data.get(tenantId) || null;
  }

  async save(tenantId: string, config: CRMConfiguration): Promise<void> {
    this.data.set(tenantId, config);
  }
}

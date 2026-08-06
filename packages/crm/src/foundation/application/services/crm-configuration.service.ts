import { ICRMConfigurationRepository } from '../interfaces/i-crm-configuration.repository';
import { CRMConfiguration } from '../../domain/value-objects/crm-configuration.vo';

export class CRMConfigurationService {
  constructor(private readonly repo: ICRMConfigurationRepository) {}

  async getConfiguration(tenantId: string): Promise<CRMConfiguration | null> {
    return this.repo.findByTenantId(tenantId);
  }

  async updateConfiguration(tenantId: string, config: CRMConfiguration): Promise<void> {
    await this.repo.save(tenantId, config);
  }
}

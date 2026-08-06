import { CRMService } from '../services/crm.service';
import { CRMConfigurationService } from '../services/crm-configuration.service';
import { CRMStatisticsService } from '../services/crm-statistics.service';
import { CRMConfiguration } from '../../domain/value-objects/crm-configuration.vo';
import { CRMStatistics } from '../../domain/value-objects/crm-statistics.vo';

export class InitializeCRMUseCase {
  constructor(private readonly crmService: CRMService) {}
  async execute(tenantId: string): Promise<void> {
    await this.crmService.initializeTenant(tenantId);
  }
}

export class GetCRMConfigurationUseCase {
  constructor(private readonly configService: CRMConfigurationService) {}
  async execute(tenantId: string): Promise<CRMConfiguration | null> {
    return this.configService.getConfiguration(tenantId);
  }
}

export class UpdateCRMSettingsUseCase {
  constructor(private readonly configService: CRMConfigurationService) {}
  async execute(tenantId: string, config: CRMConfiguration): Promise<void> {
    await this.configService.updateConfiguration(tenantId, config);
  }
}

export class GetCRMStatisticsUseCase {
  constructor(private readonly statsService: CRMStatisticsService) {}
  async execute(tenantId: string): Promise<CRMStatistics> {
    return this.statsService.getStatistics(tenantId);
  }
}

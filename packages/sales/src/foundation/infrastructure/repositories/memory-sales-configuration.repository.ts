import { ISalesConfigurationRepository } from '../../application/interfaces/i-sales-configuration-repository';
import { SalesConfiguration } from '../../domain/entities/sales-configuration.entity';
export class MemorySalesConfigurationRepository implements ISalesConfigurationRepository {
  async getConfig(): Promise<SalesConfiguration | null> {
    return null;
  }
}

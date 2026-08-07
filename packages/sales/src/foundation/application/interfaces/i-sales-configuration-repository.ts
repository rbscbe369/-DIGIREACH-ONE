import { SalesConfiguration } from '../../domain/entities/sales-configuration.entity';
export interface ISalesConfigurationRepository {
  getConfig(): Promise<SalesConfiguration | null>;
}

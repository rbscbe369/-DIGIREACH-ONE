import { MasterDataConfiguration } from '../../domain/aggregates/MasterDataConfiguration';
export interface IMasterDataConfigurationRepository {
  getConfig(): Promise<MasterDataConfiguration | null>;
}

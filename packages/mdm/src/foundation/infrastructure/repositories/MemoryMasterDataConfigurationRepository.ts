import { IMasterDataConfigurationRepository } from '../../application/interfaces/IMasterDataConfigurationRepository';
import { MasterDataConfiguration } from '../../domain/aggregates/MasterDataConfiguration';
export class MemoryMasterDataConfigurationRepository implements IMasterDataConfigurationRepository {
  async getConfig(): Promise<MasterDataConfiguration | null> {
    return null;
  }
}

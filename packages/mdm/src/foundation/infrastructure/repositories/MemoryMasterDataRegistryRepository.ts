import { IMasterDataRegistryRepository } from '../../application/interfaces/IMasterDataRegistryRepository';
import { MasterDataRegistry } from '../../domain/aggregates/MasterDataRegistry';
export class MemoryMasterDataRegistryRepository implements IMasterDataRegistryRepository {
  async getRegistry(): Promise<MasterDataRegistry | null> {
    return null;
  }
}

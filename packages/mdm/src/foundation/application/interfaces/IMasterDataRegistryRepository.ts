import { MasterDataRegistry } from '../../domain/aggregates/MasterDataRegistry';
export interface IMasterDataRegistryRepository {
  getRegistry(): Promise<MasterDataRegistry | null>;
}

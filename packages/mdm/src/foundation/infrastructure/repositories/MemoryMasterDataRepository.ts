import { IMasterDataRepository } from '../../application/interfaces/IMasterDataRepository';
export class MemoryMasterDataRepository implements IMasterDataRepository {
  async init(): Promise<void> {}
}

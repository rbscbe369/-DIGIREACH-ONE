import { IMasterDataReferenceRepository } from '../../application/interfaces/IMasterDataReferenceRepository';
import { MasterDataReference } from '../../domain/value-objects/MasterDataReference.vo';
export class MemoryMasterDataReferenceRepository implements IMasterDataReferenceRepository {
  async getReference(): Promise<MasterDataReference | null> {
    return null;
  }
}

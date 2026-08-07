import { MasterDataReference } from '../../domain/value-objects/MasterDataReference.vo';
export interface IMasterDataReferenceRepository {
  getReference(): Promise<MasterDataReference | null>;
}

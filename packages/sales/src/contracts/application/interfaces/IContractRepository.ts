import { Contract } from '../../domain/entities/Contract.entity';

export interface IContractRepository {
  save(contract: Contract): Promise<void>;
  findById(id: string, tenantId: string): Promise<Contract | null>;
}

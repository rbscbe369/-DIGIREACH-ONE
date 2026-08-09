import { Contract } from '../../domain/entities/Contract.entity';
import { IContractRepository } from '../../application/interfaces/IContractRepository';

export class MemoryContractRepository implements IContractRepository {
  private contracts: Map<string, Contract> = new Map();

  async save(contract: Contract): Promise<void> {
    this.contracts.set(`${contract.tenantId}:${contract.contractId}`, contract);
  }

  async findById(id: string, tenantId: string): Promise<Contract | null> {
    return this.contracts.get(`${tenantId}:${id}`) || null;
  }
}

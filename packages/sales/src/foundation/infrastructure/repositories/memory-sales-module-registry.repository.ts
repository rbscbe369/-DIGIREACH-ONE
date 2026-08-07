import { ISalesModuleRegistryRepository } from '../../application/interfaces/i-sales-module-registry-repository';
import { SalesModuleRegistry } from '../../domain/entities/sales-module-registry.entity';
export class MemorySalesModuleRegistryRepository implements ISalesModuleRegistryRepository {
  async getRegistry(): Promise<SalesModuleRegistry | null> {
    return null;
  }
}

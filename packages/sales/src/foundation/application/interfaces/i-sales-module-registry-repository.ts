import { SalesModuleRegistry } from '../../domain/entities/sales-module-registry.entity';
export interface ISalesModuleRegistryRepository {
  getRegistry(): Promise<SalesModuleRegistry | null>;
}

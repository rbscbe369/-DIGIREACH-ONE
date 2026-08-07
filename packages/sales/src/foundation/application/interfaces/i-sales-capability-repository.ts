import { SalesCapabilities } from '../../domain/value-objects/sales-capabilities.vo';
export interface ISalesCapabilityRepository {
  getCapabilities(): Promise<SalesCapabilities | null>;
}

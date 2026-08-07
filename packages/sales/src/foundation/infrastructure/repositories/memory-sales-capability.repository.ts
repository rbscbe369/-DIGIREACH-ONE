import { ISalesCapabilityRepository } from '../../application/interfaces/i-sales-capability-repository';
import { SalesCapabilities } from '../../domain/value-objects/sales-capabilities.vo';
export class MemorySalesCapabilityRepository implements ISalesCapabilityRepository {
  async getCapabilities(): Promise<SalesCapabilities | null> {
    return null;
  }
}

import { ISalesPolicyRepository } from '../../application/interfaces/i-sales-policy-repository';
import { SalesPolicy } from '../../domain/value-objects/sales-policy.vo';
export class MemorySalesPolicyRepository implements ISalesPolicyRepository {
  async getPolicy(): Promise<SalesPolicy | null> {
    return null;
  }
}

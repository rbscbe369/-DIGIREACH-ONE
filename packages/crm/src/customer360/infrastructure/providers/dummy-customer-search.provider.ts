import { ICustomerSearchProvider } from '../../application/interfaces/i-customer-search.provider';
import { Customer360 } from '../../domain/entities/customer360.entity';

export class DummyCustomerSearchProvider implements ICustomerSearchProvider {
  async search(_query: string, _filters: Record<string, unknown>): Promise<Customer360[]> {
    return [];
  }
}

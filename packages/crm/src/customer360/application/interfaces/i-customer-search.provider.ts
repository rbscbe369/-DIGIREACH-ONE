import { Customer360 } from '../../domain/entities/customer360.entity';

export interface ICustomerSearchProvider {
  search(query: string, filters: Record<string, unknown>): Promise<Customer360[]>;
}

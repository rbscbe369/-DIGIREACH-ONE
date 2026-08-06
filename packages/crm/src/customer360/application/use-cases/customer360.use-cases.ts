import { Customer360Service } from '../services/customer360.service';
import { Customer360 } from '../../domain/entities/customer360.entity';
import { ICustomerSearchProvider } from '../interfaces/i-customer-search.provider';

export class BuildCustomer360UseCase {
  constructor(private readonly service: Customer360Service) {}
  async execute(customer: Customer360): Promise<void> {
    await this.service.saveCustomer(customer);
  }
}

export class RefreshCustomer360UseCase {
  constructor(private readonly service: Customer360Service) {}
  async execute(customerId: string): Promise<void> {
    const customer = await this.service.getCustomer(customerId);
    if (customer) {
      // Logic to refresh summaries
      await this.service.saveCustomer(customer);
    }
  }
}

export class GetCustomer360UseCase {
  constructor(private readonly service: Customer360Service) {}
  async execute(id: string): Promise<Customer360 | null> {
    return this.service.getCustomer(id);
  }
}

export class SearchCustomersUseCase {
  constructor(private readonly provider: ICustomerSearchProvider) {}
  async execute(query: string, filters: Record<string, unknown>): Promise<Customer360[]> {
    return this.provider.search(query, filters);
  }
}

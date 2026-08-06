import { ICustomerInsightProvider } from '../interfaces/i-customer-insight.provider';
import { CustomerInsight } from '../../domain/value-objects/customer-insight.vo';

export class CustomerInsightService {
  constructor(private readonly provider: ICustomerInsightProvider) {}
  async generate(customerId: string): Promise<CustomerInsight[]> {
    return this.provider.generateInsights(customerId);
  }
}

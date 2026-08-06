import { ICustomerInsightProvider } from '../../application/interfaces/i-customer-insight.provider';
import { CustomerInsight } from '../../domain/value-objects/customer-insight.vo';

export class DummyCustomerInsightProvider implements ICustomerInsightProvider {
  async generateInsights(_customerId: string): Promise<CustomerInsight[]> {
    return [];
  }
}

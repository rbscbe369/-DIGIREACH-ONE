import { CustomerInsight } from '../../domain/value-objects/customer-insight.vo';

export interface ICustomerInsightProvider {
  generateInsights(customerId: string): Promise<CustomerInsight[]>;
}

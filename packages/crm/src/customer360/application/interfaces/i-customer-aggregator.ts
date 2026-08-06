import { CustomerReferenceSummaries } from '../../domain/value-objects/customer-reference-summaries.vo';

export interface ICustomerAggregator {
  aggregateSummaries(customerId: string): Promise<CustomerReferenceSummaries>;
}

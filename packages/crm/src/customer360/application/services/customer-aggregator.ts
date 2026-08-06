import { ICustomerAggregator } from '../interfaces/i-customer-aggregator';
import { CustomerReferenceSummaries } from '../../domain/value-objects/customer-reference-summaries.vo';

export class CustomerAggregatorService {
  constructor(private readonly provider: ICustomerAggregator) {}
  async aggregate(customerId: string): Promise<CustomerReferenceSummaries> {
    return this.provider.aggregateSummaries(customerId);
  }
}

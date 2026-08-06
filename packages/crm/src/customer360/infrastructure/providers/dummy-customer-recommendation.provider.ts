import { ICustomerRecommendationProvider } from '../../application/interfaces/i-customer-recommendation.provider';
import { CustomerRecommendation } from '../../domain/value-objects/customer-recommendation.vo';

export class DummyCustomerRecommendationProvider implements ICustomerRecommendationProvider {
  async generateRecommendations(_customerId: string): Promise<CustomerRecommendation[]> {
    return [];
  }
}

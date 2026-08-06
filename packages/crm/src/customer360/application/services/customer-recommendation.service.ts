import { ICustomerRecommendationProvider } from '../interfaces/i-customer-recommendation.provider';
import { CustomerRecommendation } from '../../domain/value-objects/customer-recommendation.vo';

export class CustomerRecommendationService {
  constructor(private readonly provider: ICustomerRecommendationProvider) {}
  async generate(customerId: string): Promise<CustomerRecommendation[]> {
    return this.provider.generateRecommendations(customerId);
  }
}

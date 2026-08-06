import { CustomerRecommendation } from '../../domain/value-objects/customer-recommendation.vo';

export interface ICustomerRecommendationProvider {
  generateRecommendations(customerId: string): Promise<CustomerRecommendation[]>;
}

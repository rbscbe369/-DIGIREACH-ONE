import { CRMRecommendation } from '../../domain/value-objects/crm-recommendation.vo';
export interface ICRMRecommendationProvider {
  generateRecommendation(context: Record<string, unknown>): Promise<CRMRecommendation>;
}

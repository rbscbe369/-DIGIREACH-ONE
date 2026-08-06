import { ICRMRecommendationProvider } from '../interfaces/i-crm-recommendation.provider';
import { CRMRecommendation } from '../../domain/value-objects/crm-recommendation.vo';
export class RecommendationGenerator {
  constructor(private readonly provider: ICRMRecommendationProvider) {}
  async generate(context: Record<string, unknown>): Promise<CRMRecommendation> {
    return this.provider.generateRecommendation(context);
  }
}

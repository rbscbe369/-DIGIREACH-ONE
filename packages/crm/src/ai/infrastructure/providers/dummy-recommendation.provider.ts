import { ICRMRecommendationProvider } from '../../application/interfaces/i-crm-recommendation.provider';
import { CRMRecommendation } from '../../domain/value-objects/crm-recommendation.vo';

export class DummyRecommendationProvider implements ICRMRecommendationProvider {
  async generateRecommendation(_context: Record<string, unknown>): Promise<CRMRecommendation> {
    return new CRMRecommendation('Title', 'Explanation', 'Impact');
  }
}

import { IOpportunityProbabilityProvider } from '../../application/interfaces/i-opportunity-probability.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityProbability } from '../../domain/value-objects/opportunity-probability.vo';

export class DummyProbabilityProvider implements IOpportunityProbabilityProvider {
  async calculateProbability(_opportunity: Opportunity): Promise<OpportunityProbability> {
    return new OpportunityProbability(50);
  }
}

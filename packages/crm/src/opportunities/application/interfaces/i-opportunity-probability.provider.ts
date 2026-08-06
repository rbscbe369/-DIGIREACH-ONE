import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityProbability } from '../../domain/value-objects/opportunity-probability.vo';

export interface IOpportunityProbabilityProvider {
  calculateProbability(opportunity: Opportunity): Promise<OpportunityProbability>;
}

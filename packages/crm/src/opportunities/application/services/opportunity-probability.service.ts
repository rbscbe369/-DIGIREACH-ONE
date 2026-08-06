import { IOpportunityProbabilityProvider } from '../interfaces/i-opportunity-probability.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityProbability } from '../../domain/value-objects/opportunity-probability.vo';

export class OpportunityProbabilityService {
  constructor(private readonly provider: IOpportunityProbabilityProvider) {}

  async getProbability(opportunity: Opportunity): Promise<OpportunityProbability> {
    return this.provider.calculateProbability(opportunity);
  }
}

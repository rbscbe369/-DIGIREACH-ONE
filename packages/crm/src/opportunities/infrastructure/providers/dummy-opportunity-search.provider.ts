import { IOpportunitySearchProvider } from '../../application/interfaces/i-opportunity-search.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';

export class DummyOpportunitySearchProvider implements IOpportunitySearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Opportunity[]> {
    return [];
  }
}

import { IOpportunitySearchProvider } from '../interfaces/i-opportunity-search.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';

export class OpportunitySearchService {
  constructor(private readonly provider: IOpportunitySearchProvider) {}

  async search(query: string, metadata: Record<string, unknown>): Promise<Opportunity[]> {
    return this.provider.search(query, metadata);
  }
}

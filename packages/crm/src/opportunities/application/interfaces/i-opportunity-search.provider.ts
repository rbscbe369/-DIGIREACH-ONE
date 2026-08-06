import { Opportunity } from '../../domain/entities/opportunity.entity';

export interface IOpportunitySearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Opportunity[]>;
}

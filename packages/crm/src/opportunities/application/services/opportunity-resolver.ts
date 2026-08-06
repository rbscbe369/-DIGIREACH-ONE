import { Opportunity } from '../../domain/entities/opportunity.entity';

export class OpportunityResolver {
  static resolveOpportunity(data: unknown): Opportunity {
    return data as Opportunity; // Placeholder
  }
}

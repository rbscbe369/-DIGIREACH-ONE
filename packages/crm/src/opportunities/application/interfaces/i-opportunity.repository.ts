import { Opportunity } from '../../domain/entities/opportunity.entity';

export interface IOpportunityRepository {
  findById(id: string): Promise<Opportunity | null>;
  save(opportunity: Opportunity): Promise<void>;
  delete(id: string): Promise<void>;
}

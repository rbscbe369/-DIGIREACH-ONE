import { IOpportunityRepository } from '../interfaces/i-opportunity.repository';
import { Opportunity } from '../../domain/entities/opportunity.entity';

export class OpportunityService {
  constructor(private readonly repo: IOpportunityRepository) {}

  async getOpportunity(id: string): Promise<Opportunity | null> {
    return this.repo.findById(id);
  }

  async saveOpportunity(opportunity: Opportunity): Promise<void> {
    await this.repo.save(opportunity);
  }

  async deleteOpportunity(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

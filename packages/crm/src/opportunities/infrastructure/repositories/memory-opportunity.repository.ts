import { IOpportunityRepository } from '../../application/interfaces/i-opportunity.repository';
import { Opportunity } from '../../domain/entities/opportunity.entity';

export class MemoryOpportunityRepository implements IOpportunityRepository {
  private ops = new Map<string, Opportunity>();

  async findById(id: string): Promise<Opportunity | null> {
    return this.ops.get(id) || null;
  }

  async save(opportunity: Opportunity): Promise<void> {
    this.ops.set(opportunity.id, opportunity);
  }

  async delete(id: string): Promise<void> {
    this.ops.delete(id);
  }
}

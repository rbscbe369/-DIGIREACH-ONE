import { ILeadRepository } from '../interfaces/i-lead.repository';
import { Lead } from '../../domain/entities/lead.entity';

export class LeadService {
  constructor(private readonly repo: ILeadRepository) {}

  async getLead(id: string): Promise<Lead | null> {
    return this.repo.findById(id);
  }

  async saveLead(lead: Lead): Promise<void> {
    await this.repo.save(lead);
  }

  async deleteLead(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

import { ILeadRepository } from '../../application/interfaces/i-lead.repository';
import { Lead } from '../../domain/entities/lead.entity';

export class MemoryLeadRepository implements ILeadRepository {
  private leads = new Map<string, Lead>();

  async findById(id: string): Promise<Lead | null> {
    return this.leads.get(id) || null;
  }

  async save(lead: Lead): Promise<void> {
    this.leads.set(lead.id, lead);
  }

  async delete(id: string): Promise<void> {
    this.leads.delete(id);
  }
}

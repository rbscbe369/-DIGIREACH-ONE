import { Lead } from '../../domain/entities/lead.entity';

export interface ILeadRepository {
  findById(id: string): Promise<Lead | null>;
  save(lead: Lead): Promise<void>;
  delete(id: string): Promise<void>;
}

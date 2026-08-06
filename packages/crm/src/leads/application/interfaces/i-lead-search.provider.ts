import { Lead } from '../../domain/entities/lead.entity';

export interface ILeadSearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Lead[]>;
}

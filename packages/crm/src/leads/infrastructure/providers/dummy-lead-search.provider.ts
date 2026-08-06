import { ILeadSearchProvider } from '../../application/interfaces/i-lead-search.provider';
import { Lead } from '../../domain/entities/lead.entity';

export class DummyLeadSearchProvider implements ILeadSearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Lead[]> {
    return [];
  }
}

import { Lead } from '../../domain/entities/lead.entity';

export class LeadResolver {
  static resolveLead(data: unknown): Lead {
    return data as Lead; // Placeholder
  }
}

import { LeadService } from '../services/lead.service';
import { Lead } from '../../domain/entities/lead.entity';
import { LeadConvertedEvent } from '../../domain/events/lead.events';

export class CreateLeadUseCase {
  constructor(private readonly leadService: LeadService) {}
  async execute(lead: Lead): Promise<void> {
    await this.leadService.saveLead(lead);
  }
}

export class UpdateLeadUseCase {
  constructor(private readonly leadService: LeadService) {}
  async execute(lead: Lead): Promise<void> {
    await this.leadService.saveLead(lead);
  }
}

export class ConvertLeadUseCase {
  constructor(private readonly leadService: LeadService) {}
  async execute(leadId: string): Promise<void> {
    const lead = await this.leadService.getLead(leadId);
    if (lead) {
      lead.convert();
      await this.leadService.saveLead(lead);
      new LeadConvertedEvent(leadId); // Event publishing would happen here
    }
  }
}

import { ILeadSearchProvider } from '../interfaces/i-lead-search.provider';

export class SearchLeadsUseCase {
  constructor(private readonly searchProvider: ILeadSearchProvider) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Lead[]> {
    return this.searchProvider.search(query, metadata);
  }
}

import { Lead } from '../../domain/entities/lead.entity';
import { LeadQualification } from '../../domain/value-objects/lead-qualification.vo';

export class LeadQualificationService {
  async qualifyLead(lead: Lead): Promise<void> {
    lead.qualification = new LeadQualification(
      true,
      new Date(),
      'system',
      null,
      lead.qualification.budget,
      lead.qualification.authority,
      lead.qualification.need,
      lead.qualification.timeline,
    );
  }

  async disqualifyLead(lead: Lead, reason: string): Promise<void> {
    lead.qualification = new LeadQualification(
      false,
      null,
      null,
      reason,
      lead.qualification.budget,
      lead.qualification.authority,
      lead.qualification.need,
      lead.qualification.timeline,
    );
  }
}

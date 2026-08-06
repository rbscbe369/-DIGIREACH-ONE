import { Lead } from '../../domain/entities/lead.entity';
import { LeadDuplicate } from '../../domain/entities/lead-duplicate.entity';

export interface ILeadDuplicateDetector {
  detectDuplicates(lead: Lead): Promise<LeadDuplicate[]>;
}

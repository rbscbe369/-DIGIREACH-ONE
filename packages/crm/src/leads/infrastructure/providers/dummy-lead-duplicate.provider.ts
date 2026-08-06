import { ILeadDuplicateDetector } from '../../application/interfaces/i-lead-duplicate.detector';
import { Lead } from '../../domain/entities/lead.entity';
import { LeadDuplicate } from '../../domain/entities/lead-duplicate.entity';

export class DummyLeadDuplicateProvider implements ILeadDuplicateDetector {
  async detectDuplicates(_lead: Lead): Promise<LeadDuplicate[]> {
    return [];
  }
}

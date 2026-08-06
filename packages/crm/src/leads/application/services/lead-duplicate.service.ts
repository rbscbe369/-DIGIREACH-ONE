import { ILeadDuplicateDetector } from '../interfaces/i-lead-duplicate.detector';
import { Lead } from '../../domain/entities/lead.entity';
import { LeadDuplicate } from '../../domain/entities/lead-duplicate.entity';

export class LeadDuplicateService {
  constructor(private readonly detector: ILeadDuplicateDetector) {}

  async checkDuplicates(lead: Lead): Promise<LeadDuplicate[]> {
    return this.detector.detectDuplicates(lead);
  }
}

import { Lead } from '../../domain/entities/lead.entity';
import { LeadScore } from '../../domain/value-objects/lead-score.vo';

export interface ILeadScoringService {
  calculateScore(lead: Lead): Promise<LeadScore>;
}

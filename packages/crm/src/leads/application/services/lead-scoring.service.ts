import { ILeadScoringService } from '../interfaces/i-lead-scoring.service';
import { Lead } from '../../domain/entities/lead.entity';
import { LeadScore } from '../../domain/value-objects/lead-score.vo';

export class LeadScoringService {
  constructor(private readonly scoringProvider: ILeadScoringService) {}

  async scoreLead(lead: Lead): Promise<LeadScore> {
    return this.scoringProvider.calculateScore(lead);
  }
}

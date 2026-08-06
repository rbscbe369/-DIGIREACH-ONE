import { OpportunityService } from '../services/opportunity.service';
import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityTimeline } from '../../domain/entities/opportunity-timeline.entity';
import { OpportunitySearchService } from '../services/opportunity-search.service';
import { OpportunityStage, OpportunityStageValue } from '../../domain/value-objects/opportunity-stage.vo';
import { OpportunityStatus } from '../../domain/value-objects/opportunity-status.vo';

export class CreateOpportunityUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunity: Opportunity): Promise<void> {
    await this.opportunityService.saveOpportunity(opportunity);
  }
}

export class UpdateOpportunityUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunity: Opportunity): Promise<void> {
    await this.opportunityService.saveOpportunity(opportunity);
  }
}

export class AssignOpportunityUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string, _assigneeId: string): Promise<void> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    if (opportunity) {
      // assignment logic
      await this.opportunityService.saveOpportunity(opportunity);
    }
  }
}

export class AdvanceOpportunityStageUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string, newStageValue: OpportunityStageValue): Promise<void> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    if (opportunity) {
      opportunity.advanceStage(new OpportunityStage(newStageValue, new Date()));
      await this.opportunityService.saveOpportunity(opportunity);
    }
  }
}

export class MarkOpportunityWonUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string): Promise<void> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    if (opportunity) {
      opportunity.advanceStage(new OpportunityStage('CLOSED_WON', new Date()));
      opportunity.status = new OpportunityStatus('WON', null, new Date());
      await this.opportunityService.saveOpportunity(opportunity);
    }
  }
}

export class MarkOpportunityLostUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string): Promise<void> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    if (opportunity) {
      opportunity.advanceStage(new OpportunityStage('CLOSED_LOST', new Date()));
      opportunity.status = new OpportunityStatus('LOST', null, new Date());
      await this.opportunityService.saveOpportunity(opportunity);
    }
  }
}

export class ArchiveOpportunityUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string): Promise<void> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    if (opportunity) {
      opportunity.archive();
      await this.opportunityService.saveOpportunity(opportunity);
    }
  }
}

export class DeleteOpportunityUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string): Promise<void> {
    await this.opportunityService.deleteOpportunity(opportunityId);
  }
}

export class SearchOpportunitiesUseCase {
  constructor(private readonly searchService: OpportunitySearchService) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Opportunity[]> {
    return this.searchService.search(query, metadata);
  }
}

export class GetOpportunityTimelineUseCase {
  constructor(private readonly opportunityService: OpportunityService) {}
  async execute(opportunityId: string): Promise<OpportunityTimeline | null> {
    const opportunity = await this.opportunityService.getOpportunity(opportunityId);
    return opportunity ? opportunity.timeline : null;
  }
}

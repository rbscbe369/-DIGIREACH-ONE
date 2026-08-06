import { OpportunityIdentity } from '../value-objects/opportunity-identity.vo';
import { OpportunityProfile } from '../value-objects/opportunity-profile.vo';
import { OpportunityLifecycle } from '../value-objects/opportunity-lifecycle.vo';
import { OpportunityStage } from '../value-objects/opportunity-stage.vo';
import { OpportunityStatus } from '../value-objects/opportunity-status.vo';
import { OpportunityPriority } from '../value-objects/opportunity-priority.vo';
import { OpportunityRevenue } from '../value-objects/opportunity-revenue.vo';
import { OpportunityForecast } from '../value-objects/opportunity-forecast.vo';
import { OpportunityProbability } from '../value-objects/opportunity-probability.vo';
import { OpportunityCurrency } from '../value-objects/opportunity-currency.vo';
import { OpportunityBuyingCommittee } from '../value-objects/opportunity-buying-committee.vo';
import { OpportunityCompetitor } from '../value-objects/opportunity-competitor.vo';
import { OpportunityCommunication } from '../value-objects/opportunity-communication.vo';
import { OpportunityActivity } from '../value-objects/opportunity-activity.vo';
import { OpportunityTimeline } from './opportunity-timeline.entity';
import { OpportunityStatistics } from '../value-objects/opportunity-statistics.vo';
import { OpportunityPreference } from '../value-objects/opportunity-preference.vo';
import { OpportunityAIProfile } from '../value-objects/opportunity-ai-profile.vo';
import { OpportunityRelationship } from '../value-objects/opportunity-relationship.vo';
import { OpportunityTag } from '../value-objects/opportunity-tag.vo';
import { OpportunityRisk } from '../value-objects/opportunity-risk.vo';

export class Opportunity {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: OpportunityIdentity,
    public readonly profile: OpportunityProfile,
    public lifecycle: OpportunityLifecycle,
    public stage: OpportunityStage,
    public status: OpportunityStatus,
    public priority: OpportunityPriority,
    public revenue: OpportunityRevenue,
    public forecast: OpportunityForecast,
    public probability: OpportunityProbability,
    public currency: OpportunityCurrency,
    public buyingCommittee: OpportunityBuyingCommittee,
    public competitors: OpportunityCompetitor[],
    public communications: OpportunityCommunication[],
    public activities: OpportunityActivity[],
    public timeline: OpportunityTimeline,
    public statistics: OpportunityStatistics,
    public preferences: OpportunityPreference,
    public aiProfile: OpportunityAIProfile,
    public relationships: OpportunityRelationship[],
    public tags: OpportunityTag[],
    public risk: OpportunityRisk,
  ) {}

  public advanceStage(newStage: OpportunityStage): void {
    this.stage = newStage;
  }

  public archive(): void {
    this.status = new OpportunityStatus('ARCHIVED', 'Manually archived', new Date());
    this.lifecycle = new OpportunityLifecycle(
      true,
      this.lifecycle.createdAt,
      this.lifecycle.lastActivityAt,
    );
  }
}

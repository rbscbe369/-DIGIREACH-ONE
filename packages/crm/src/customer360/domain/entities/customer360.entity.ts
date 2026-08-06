import { CustomerIdentity } from '../value-objects/customer-identity.vo';
import { CustomerProfile } from '../value-objects/customer-profile.vo';
import { CustomerCommunicationProfile } from '../value-objects/customer-communication-profile.vo';
import { CustomerPreference } from '../value-objects/customer-preference.vo';
import { CustomerRelationshipGraph } from '../value-objects/customer-relationship-graph.vo';
import { CustomerInteractionTimeline } from '../value-objects/customer-interaction-timeline.vo';
import { CustomerJourney } from '../value-objects/customer-journey.vo';
import { CustomerEngagement } from '../value-objects/customer-engagement.vo';
import { CustomerHealth } from '../value-objects/customer-health.vo';
import { CustomerRisk } from '../value-objects/customer-risk.vo';
import { CustomerSegmentation } from '../value-objects/customer-segmentation.vo';
import { CustomerStatistics } from '../value-objects/customer-statistics.vo';
import { CustomerInsight } from '../value-objects/customer-insight.vo';
import { CustomerRecommendation } from '../value-objects/customer-recommendation.vo';
import { CustomerAlert } from '../value-objects/customer-alert.vo';
import { CustomerAISummary } from '../value-objects/customer-ai-summary.vo';
import { CustomerReferenceSummaries } from '../value-objects/customer-reference-summaries.vo';
import { CustomerTag } from '../value-objects/customer-tag.vo';
import { CustomerCustomField } from '../value-objects/customer-custom-field.vo';

export class Customer360 {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: CustomerIdentity,
    public profile: CustomerProfile,
    public communicationProfile: CustomerCommunicationProfile,
    public preferences: CustomerPreference,
    public relationshipGraph: CustomerRelationshipGraph,
    public timeline: CustomerInteractionTimeline,
    public journey: CustomerJourney,
    public engagement: CustomerEngagement,
    public health: CustomerHealth,
    public risk: CustomerRisk,
    public segmentation: CustomerSegmentation,
    public statistics: CustomerStatistics,
    public insights: CustomerInsight[],
    public recommendations: CustomerRecommendation[],
    public alerts: CustomerAlert[],
    public aiSummary: CustomerAISummary,
    public referenceSummaries: CustomerReferenceSummaries,
    public tags: CustomerTag[],
    public customFields: CustomerCustomField[],
  ) {}
}

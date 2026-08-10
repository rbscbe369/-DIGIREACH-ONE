import { OpportunityIntegrationEvents } from '../domain/events/opportunity.events';
import { Opportunity } from '../domain/entities/opportunity.entity';
import { OpportunityIdentity } from '../domain/value-objects/opportunity-identity.vo';
import { OpportunityProfile } from '../domain/value-objects/opportunity-profile.vo';
import { OpportunityLifecycle } from '../domain/value-objects/opportunity-lifecycle.vo';
import { OpportunityStage } from '../domain/value-objects/opportunity-stage.vo';
import { OpportunityStatus } from '../domain/value-objects/opportunity-status.vo';
import { OpportunityPriority } from '../domain/value-objects/opportunity-priority.vo';
import { OpportunityRevenue } from '../domain/value-objects/opportunity-revenue.vo';
import { OpportunityForecast } from '../domain/value-objects/opportunity-forecast.vo';
import { OpportunityProbability } from '../domain/value-objects/opportunity-probability.vo';
import { OpportunityCurrency } from '../domain/value-objects/opportunity-currency.vo';
import { OpportunityBuyingCommittee } from '../domain/value-objects/opportunity-buying-committee.vo';
import { OpportunityTimeline } from '../domain/entities/opportunity-timeline.entity';
import { OpportunityStatistics } from '../domain/value-objects/opportunity-statistics.vo';
import { OpportunityPreference } from '../domain/value-objects/opportunity-preference.vo';
import { OpportunityAIProfile } from '../domain/value-objects/opportunity-ai-profile.vo';
import { OpportunityRisk } from '../domain/value-objects/opportunity-risk.vo';
import { IIdGenerator } from '@digireach-one/shared-kernel';

describe('OpportunityIntegrationEvents', () => {
  const mockIdGen: IIdGenerator = { generate: () => 'test-id' };

  it('should generate OutboxMessage with schemaVersion and correct facts', () => {
    const opp = new Opportunity(
      'opp-1',
      'tenant-1',
      new OpportunityIdentity('OPP-1', null, null, null, null, null, null, null, null, null, null),
      new OpportunityProfile('Test Opp', null, null, {}),
      new OpportunityLifecycle(false, new Date(), null),
      new OpportunityStage('PROSPECTING', new Date()),
      new OpportunityStatus('OPEN', null, new Date()),
      new OpportunityPriority('MEDIUM', null),
      new OpportunityRevenue(10000, 0, 10000, 0, 0, 0, 0, 0),
      new OpportunityForecast('PIPELINE', new Date('2026-12-31T00:00:00Z'), null),
      new OpportunityProbability(10),
      new OpportunityCurrency('USD', 1, new Date()),
      new OpportunityBuyingCommittee([], null),
      [],
      [],
      [],
      new OpportunityTimeline([]),
      new OpportunityStatistics(0, 0, 0),
      new OpportunityPreference('EMAIL', 'ENGLISH', 'UTC'),
      new OpportunityAIProfile(null, null, null, null),
      [],
      [],
      new OpportunityRisk('LOW', []),
    );

    const event = OpportunityIntegrationEvents.opportunityStageChanged(opp, mockIdGen);
    expect(event.tenantId).toBe('tenant-1');
    const payload = JSON.parse(event.payload);
    expect(payload.schemaVersion).toBe('1.0');
    expect(payload.tenantId).toBe('tenant-1');
    expect(payload.revenueAmountMinorUnits).toBe(10000);
    expect(payload.currency).toBe('USD');
    expect(payload.expectedCloseDate).toBe('2026-12-31T00:00:00.000Z');
    expect(payload.opportunityId).toBe('opp-1');
  });
});

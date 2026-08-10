import { DealProbability } from '../domain/DealProbability.vo';
import { ForecastPeriod } from '../domain/ForecastPeriod.vo';
import { ForecastDimension } from '../domain/ForecastDimension.vo';
import { HistoricalCloseRate } from '../domain/HistoricalCloseRate.vo';
import { DealState } from '../domain/DealState.vo';
import { RevenueIntelligenceSnapshot } from '../domain/RevenueIntelligenceSnapshot.entity';
import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';
import { Money } from '@digireach-one/shared-kernel';
import { RevenueIntelligenceEventProcessor } from '../application/RevenueIntelligenceEventProcessor';
import { RevenueIntelligenceQueryService } from '../application/RevenueIntelligenceQueryService';
import { MemoryRevenueIntelligenceRepository } from '../infrastructure/MemoryRevenueIntelligenceRepository';
import { MemoryProcessedEventTracker } from '../infrastructure/MemoryProcessedEventTracker';

describe('Revenue Intelligence Engine', () => {
  describe('Domain Value Objects', () => {
    it('should enforce probability bounds', () => {
      expect(() => new DealProbability(101, 'DERIVED')).toThrow(/Invalid probability/);
      expect(() => new DealProbability(-1, 'CRM_FACTUAL')).toThrow(/Invalid probability/);
      expect(new DealProbability(50, 'CRM_FACTUAL').value).toBe(50);
    });

    it('should safely handle historical close rate zero denominator', () => {
      const rate = new HistoricalCloseRate(0, 0);
      expect(rate.rate).toBeNull();
      expect(rate.sufficiency).toBe('INSUFFICIENT_DATA');
    });

    it('should calculate historical close rate accurately', () => {
      const rate = new HistoricalCloseRate(5, 20);
      expect(rate.rate).toBe(25);
      expect(rate.sufficiency).toBe('SUFFICIENT');
    });

    it('should calculate forecast periods deterministically at UTC boundaries', () => {
      const d = new Date('2026-08-11T14:30:00Z');
      const month = ForecastPeriod.fromDate(d, 'Month');
      expect(month.startDate.toISOString()).toBe('2026-08-01T00:00:00.000Z');

      const quarter = ForecastPeriod.fromDate(d, 'Quarter');
      expect(quarter.startDate.toISOString()).toBe('2026-07-01T00:00:00.000Z');
    });
  });

  describe('Revenue Intelligence Snapshot (Weighted Pipeline & Currency)', () => {
    it('should isolate currencies and reject cross-currency aggregation', () => {
      const dimension = new ForecastDimension('t1', 'org1', 'USD');
      const period = ForecastPeriod.fromDate(new Date('2026-08-11Z'), 'Month');
      const snap = RevenueIntelligenceSnapshot.createEmpty('s1', dimension, period);

      const dealUSD = new DealState(
        'opp1',
        Money.fromMinorUnits(10000, 'USD'),
        50,
        'OPEN',
        'PROSPECTING',
        new Date(),
        new Date(),
      );
      const dealEUR = new DealState(
        'opp2',
        Money.fromMinorUnits(10000, 'EUR'),
        50,
        'OPEN',
        'PROSPECTING',
        new Date(),
        new Date(),
      );

      snap.applyDealState(dealUSD);
      expect(() => snap.applyDealState(dealEUR)).toThrow(/Cannot aggregate EUR into USD/);
    });

    it('should calculate weighted pipeline deterministically without floating-point errors', () => {
      const dimension = new ForecastDimension('t1', null, 'USD');
      const period = ForecastPeriod.fromDate(new Date('2026-08-11Z'), 'Month');
      const snap = RevenueIntelligenceSnapshot.createEmpty('s1', dimension, period);

      // 100.00 USD @ 33% = 33.00 USD
      const deal1 = new DealState(
        'opp1',
        Money.fromMinorUnits(10000, 'USD'),
        33,
        'OPEN',
        'PROSPECTING',
        new Date(),
        new Date(),
      );
      snap.applyDealState(deal1);
      expect(snap.weightedPipeline.minorUnits).toBe(3300);
      expect(snap.pipelineCount).toBe(1);

      // Transition to WON
      const deal1Won = new DealState(
        'opp1',
        Money.fromMinorUnits(10000, 'USD'),
        100,
        'WON',
        'CLOSED_WON',
        new Date(),
        new Date(Date.now() + 1000),
      );
      snap.applyDealState(deal1Won);

      expect(snap.pipelineCount).toBe(0);
      expect(snap.weightedPipeline.minorUnits).toBe(0);
      expect(snap.wonCount).toBe(1);
      expect(snap.wonRevenue.minorUnits).toBe(10000);
    });
  });

  describe('Application Services & Idempotency / Event Ordering', () => {
    let repo: MemoryRevenueIntelligenceRepository;
    let tracker: MemoryProcessedEventTracker;
    let processor: RevenueIntelligenceEventProcessor;
    let query: RevenueIntelligenceQueryService;

    beforeEach(() => {
      repo = new MemoryRevenueIntelligenceRepository();
      tracker = new MemoryProcessedEventTracker();
      processor = new RevenueIntelligenceEventProcessor(repo, tracker);
      query = new RevenueIntelligenceQueryService(repo);
    });

    const createMessage = (
      id: string,
      type: string,
      payload: Record<string, unknown>,
    ): OutboxMessage => {
      return new OutboxMessage(
        id,
        id,
        type,
        'agg1',
        'Opportunity',
        JSON.stringify(payload),
        null,
        null,
        null,
        't1',
        new Date(),
        new Date(),
        OutboxMessageStatus.Pending,
        0,
        null,
        null,
        null,
      );
    };

    it('should handle out-of-order events safely', async () => {
      const t1 = new Date('2026-08-11T10:00:00Z');
      const t2 = new Date('2026-08-11T11:00:00Z');
      const t3 = new Date('2026-08-11T12:00:00Z');
      const expectedClose = new Date('2026-08-15T00:00:00Z');

      const payloadT1 = {
        schemaVersion: '1.0',
        tenantId: 't1',
        currency: 'USD',
        opportunityId: 'o1',
        revenueAmountMinorUnits: 10000,
        probability: 10,
        status: 'OPEN',
        expectedCloseDate: expectedClose.toISOString(),
        occurredAt: t1.toISOString(),
      };
      const payloadT2 = {
        schemaVersion: '1.0',
        tenantId: 't1',
        currency: 'USD',
        opportunityId: 'o1',
        revenueAmountMinorUnits: 10000,
        probability: 50,
        status: 'OPEN',
        expectedCloseDate: expectedClose.toISOString(),
        occurredAt: t2.toISOString(),
      };
      const payloadT3 = {
        schemaVersion: '1.0',
        tenantId: 't1',
        currency: 'USD',
        opportunityId: 'o1',
        revenueAmountMinorUnits: 10000,
        probability: 100,
        status: 'WON',
        expectedCloseDate: expectedClose.toISOString(),
        occurredAt: t3.toISOString(),
      };

      // Deliver T3 (Won) first!
      await processor.process(createMessage('msg3', 'OpportunityWon', payloadT3));

      let snap = await query.getForecast('t1', null, 'USD', 'Month', expectedClose);
      expect(snap?.wonCount).toBe(1);
      expect(snap?.wonRevenue.minorUnits).toBe(10000);
      expect(snap?.pipelineCount).toBe(0);

      // Now deliver T1 and T2 (Open/Older states) late
      await processor.process(createMessage('msg1', 'OpportunityCreated', payloadT1));
      await processor.process(createMessage('msg2', 'OpportunityStageChanged', payloadT2));

      // Result should be UNCHANGED because they are older!
      snap = await query.getForecast('t1', null, 'USD', 'Month', expectedClose);
      expect(snap?.wonCount).toBe(1);
      expect(snap?.wonRevenue.minorUnits).toBe(10000);
      expect(snap?.pipelineCount).toBe(0);
    });

    it('should enforce idempotency for duplicate events', async () => {
      const payload = {
        schemaVersion: '1.0',
        tenantId: 't1',
        currency: 'USD',
        opportunityId: 'o2',
        revenueAmountMinorUnits: 5000,
        probability: 10,
        status: 'OPEN',
        expectedCloseDate: new Date().toISOString(),
        occurredAt: new Date().toISOString(),
      };
      const msg = createMessage('msg4', 'OpportunityCreated', payload);

      await processor.process(msg);
      await processor.process(msg); // Duplicate
      await processor.process(msg); // Duplicate

      const snap = await query.getForecast('t1', null, 'USD', 'Month', new Date());
      expect(snap?.pipelineCount).toBe(1);
      expect(snap?.weightedPipeline.minorUnits).toBe(500); // 5000 * 0.1
    });

    it('should enforce tenant isolation', async () => {
      const expectedClose = new Date('2026-08-15T00:00:00Z');
      const p1 = {
        schemaVersion: '1.0',
        tenantId: 't1',
        currency: 'USD',
        opportunityId: 'o1',
        revenueAmountMinorUnits: 10000,
        probability: 50,
        expectedCloseDate: expectedClose.toISOString(),
      };
      const p2 = {
        schemaVersion: '1.0',
        tenantId: 't2',
        currency: 'USD',
        opportunityId: 'o2',
        revenueAmountMinorUnits: 20000,
        probability: 50,
        expectedCloseDate: expectedClose.toISOString(),
      };

      await processor.process(createMessage('m1', 'OpportunityCreated', p1));
      await processor.process(createMessage('m2', 'OpportunityCreated', p2));

      const snapT1 = await query.getForecast('t1', null, 'USD', 'Month', expectedClose);
      const snapT2 = await query.getForecast('t2', null, 'USD', 'Month', expectedClose);

      expect(snapT1?.weightedPipeline.minorUnits).toBe(5000);
      expect(snapT2?.weightedPipeline.minorUnits).toBe(10000);
    });

    it('should safely reject unknown schema versions', async () => {
      const payload = { schemaVersion: '2.0', tenantId: 't1', currency: 'USD' };
      await expect(
        processor.process(createMessage('m5', 'OpportunityCreated', payload)),
      ).rejects.toThrow(/Unsupported schema version/);
    });
  });
});

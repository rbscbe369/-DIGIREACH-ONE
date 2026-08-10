import { OutboxMessage } from '@digireach-one/core';
import { Money } from '@digireach-one/shared-kernel';
import { ForecastDimension } from '../domain/ForecastDimension.vo';
import { ForecastPeriod, ForecastPeriodType } from '../domain/ForecastPeriod.vo';
import { DealState } from '../domain/DealState.vo';
import { RevenueIntelligenceSnapshot } from '../domain/RevenueIntelligenceSnapshot.entity';
import { MemoryRevenueIntelligenceRepository } from '../infrastructure/MemoryRevenueIntelligenceRepository';
import { MemoryProcessedEventTracker } from '../infrastructure/MemoryProcessedEventTracker';

export class RevenueIntelligenceEventProcessor {
  constructor(
    private readonly repository: MemoryRevenueIntelligenceRepository,
    private readonly tracker: MemoryProcessedEventTracker,
  ) {}

  public async process(event: OutboxMessage): Promise<void> {
    if (await this.tracker.hasProcessed(event.eventId)) {
      return;
    }

    const payload = JSON.parse(event.payload) as Record<string, unknown>;

    if (payload.schemaVersion !== '1.0') {
      throw new Error(`Unsupported schema version: ${payload.schemaVersion}`);
    }

    if (event.eventType.startsWith('Opportunity')) {
      await this.handleOpportunityEvent(event.eventId, payload, event.occurredAt);
    }

    await this.tracker.markProcessed(event.eventId);
  }

  private async handleOpportunityEvent(
    _eventId: string,
    payload: Record<string, unknown>,
    fallbackDate: Date,
  ): Promise<void> {
    if (!payload.expectedCloseDate) {
      return; // Cannot forecast without expected close date
    }

    const tenantId = payload.tenantId as string;
    const organizationId = (payload.organizationId as string) || null;
    const currency = payload.currency as string;
    const dimension = new ForecastDimension(tenantId, organizationId, currency);
    const amount = Money.fromMinorUnits((payload.revenueAmountMinorUnits as number) || 0, currency);

    const occurredAt = payload.occurredAt ? new Date(payload.occurredAt as string) : fallbackDate;
    const expectedCloseDate = new Date(payload.expectedCloseDate as string);

    const deal = new DealState(
      payload.opportunityId as string,
      amount,
      (payload.probability as number) || 0,
      payload.status as string,
      payload.stage as string,
      expectedCloseDate,
      occurredAt,
    );

    const periodTypes: ForecastPeriodType[] = ['Day', 'Week', 'Month', 'Quarter', 'Year'];
    const periods = periodTypes.map((t) => ForecastPeriod.fromDate(expectedCloseDate, t));

    await this.repository.removeDealFromOtherPeriods(deal.opportunityId, dimension, periods);

    for (const period of periods) {
      let snapshot = await this.repository.findSnapshot(dimension, period);
      if (!snapshot) {
        const id = `${dimension.toPartitionKey()}_${period.type}_${period.startDate.toISOString()}`;
        snapshot = RevenueIntelligenceSnapshot.createEmpty(id, dimension, period);
      }

      snapshot.applyDealState(deal);
      await this.repository.saveSnapshot(snapshot);
    }
  }
}

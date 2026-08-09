import { ISalesAnalyticsRepository } from '../interfaces/ISalesAnalyticsRepository';
import { AnalyticsSnapshot } from '../../domain/entities/AnalyticsSnapshot.entity';
import { SalesDimension } from '../../domain/value-objects/SalesDimension.vo';
import { SalesPeriod, SalesPeriodType } from '../../domain/value-objects/SalesPeriod.vo';
import { SalesKpi } from '../../domain/value-objects/SalesKpi.vo';
import { Money } from '@digireach-one/shared-kernel';

export class AnalyticsEventProcessor {
  constructor(private readonly repository: ISalesAnalyticsRepository) {}

  private async getOrCreateSnapshot(
    tenantId: string,
    organizationId: string | null,
    currency: string,
    date: Date,
  ): Promise<AnalyticsSnapshot> {
    // Determine the month period for simplicity
    const startOfMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
    const endOfMonth = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0, 23, 59, 59, 999),
    );

    const period = new SalesPeriod(SalesPeriodType.Month, startOfMonth, endOfMonth);
    const dimension = new SalesDimension(tenantId, organizationId, null, null, currency);

    const context = { dimension, period };
    let snapshot = await this.repository.findSnapshot(context);

    if (!snapshot) {
      snapshot = new AnalyticsSnapshot(
        Math.random().toString(36).substring(7),
        dimension,
        period,
        new SalesKpi(
          0,
          Money.fromMinorUnits(0, currency),
          0,
          0,
          0,
          0,
          0,
          Money.fromMinorUnits(0, currency),
          0,
          0,
          Money.fromMinorUnits(0, currency),
          Money.fromMinorUnits(0, currency),
        ),
      );
    }

    return snapshot;
  }

  public async processEvent(event: unknown): Promise<void> {
    try {
      const outboxMsg = event as {
        payload: string;
        eventId: string;
        eventType: string;
        occurredAt: string;
      };
      const payload = JSON.parse(outboxMsg.payload);
      if (!payload || !payload.tenantId || !payload.currency) {
        return; // Unprocessable event lacking minimum dimensions
      }

      const snapshot = await this.getOrCreateSnapshot(
        payload.tenantId,
        payload.organizationId || null,
        payload.currency,
        new Date(outboxMsg.occurredAt),
      );

      if (snapshot.hasProcessed(outboxMsg.eventId)) {
        return; // Idempotency check
      }

      // Projection Logic
      switch (outboxMsg.eventType) {
        case 'QuoteCreated':
          snapshot.kpis.quoteCount += 1;
          snapshot.kpis.quoteValue = snapshot.kpis.quoteValue.add(
            Money.fromDecimal(payload.grandTotal || 0, payload.currency),
          );
          break;
        case 'QuoteStatusChanged':
          if (payload.newStatus === 'Accepted') snapshot.kpis.acceptedQuoteCount += 1;
          if (payload.newStatus === 'Rejected') snapshot.kpis.rejectedQuoteCount += 1;
          if (payload.newStatus === 'Expired') snapshot.kpis.expiredQuoteCount += 1;
          break;
        case 'OrderCreated':
          snapshot.kpis.orderCount += 1;
          snapshot.kpis.orderValue = snapshot.kpis.orderValue.add(
            Money.fromMinorUnits(payload.grandTotalMinorUnits || 0, payload.currency),
          );
          if (payload.sourceQuoteId) snapshot.kpis.convertedToOrderCount += 1;
          break;
        case 'ContractCreated':
          snapshot.kpis.contractCount += 1;
          break;
        case 'ContractActivated':
          snapshot.kpis.activatedContractCount += 1;
          snapshot.kpis.contractOneTimeValue = snapshot.kpis.contractOneTimeValue.add(
            Money.fromMinorUnits(payload.totalOneTimeValueMinorUnits || 0, payload.currency),
          );
          snapshot.kpis.contractRecurringValue = snapshot.kpis.contractRecurringValue.add(
            Money.fromMinorUnits(payload.totalRecurringValueMinorUnits || 0, payload.currency),
          );
          break;
      }

      snapshot.markProcessed(outboxMsg.eventId);
      await this.repository.saveSnapshot(snapshot);
    } catch (e) {
      console.error('Failed to process analytics event:', e);
    }
  }
}

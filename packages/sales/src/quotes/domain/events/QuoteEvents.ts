export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class QuoteCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'QuoteCreatedEvent';
  constructor(public readonly quoteId: string) {}
}

export class QuoteStatusChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'QuoteStatusChangedEvent';
  constructor(
    public readonly quoteId: string,
    public readonly oldStatus: string,
    public readonly newStatus: string,
  ) {}
}

import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';
import { Quote } from '../entities/Quote.entity';

export class QuoteIntegrationEvents {
  static createEvent(
    type: string,
    quote: Quote,
    payloadOverrides: Record<string, unknown> = {},
  ): OutboxMessage {
    const payload = {
      quoteId: quote.quoteId,
      quoteNumber: quote.quoteNumber,
      status: quote.status,
      tenantId: quote.metadata.tenantId,
      organizationId: quote.metadata.organizationId,
      currency: quote.metadata.currency,
      subtotal: quote.currentTotals.subtotal,
      adjustments: quote.currentTotals.adjustments,
      grandTotal: quote.currentTotals.grandTotal,
      ...payloadOverrides,
    };

    return new OutboxMessage(
      Math.random().toString(36).substring(2, 15),
      Math.random().toString(36).substring(2, 15),
      type,
      quote.quoteId,
      'Quote',
      JSON.stringify(payload),
      null,
      null,
      null,
      quote.metadata.tenantId,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
  }

  static quoteCreated(quote: Quote) {
    return this.createEvent('QuoteCreated', quote);
  }

  static quoteStatusChanged(quote: Quote, oldStatus: string, newStatus: string) {
    return this.createEvent('QuoteStatusChanged', quote, { oldStatus, newStatus });
  }
}

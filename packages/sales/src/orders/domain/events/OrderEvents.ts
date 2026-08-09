export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class OrderCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrderCreatedEvent';
  constructor(
    public readonly orderId: string,
    public readonly quoteId: string,
  ) {}
}

import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';
import { Order } from '../entities/Order.entity';

export class OrderIntegrationEvents {
  static createEvent(
    type: string,
    order: Order,
    payloadOverrides: Record<string, unknown> = {},
  ): OutboxMessage {
    const payload = {
      orderId: order.orderId,
      orderNumber: order.orderNumber,
      status: order.status,
      tenantId: order.tenantId,
      organizationId: order.organizationId,
      sourceQuoteId: order.sourceQuoteId,
      currency: order.currentTotals.subtotal.currencyCode,
      subtotalMinorUnits: order.currentTotals.subtotal.minorUnits,
      adjustmentsMinorUnits: order.currentTotals.adjustments.minorUnits,
      grandTotalMinorUnits: order.currentTotals.grandTotal.minorUnits,
      ...payloadOverrides,
    };

    return new OutboxMessage(
      Math.random().toString(36).substring(2, 15),
      Math.random().toString(36).substring(2, 15),
      type,
      order.orderId,
      'Order',
      JSON.stringify(payload),
      null,
      null,
      null,
      order.tenantId,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
  }

  static orderCreated(order: Order) {
    return this.createEvent('OrderCreated', order);
  }

  static orderStatusChanged(order: Order, oldStatus: string, newStatus: string) {
    return this.createEvent('OrderStatusChanged', order, { oldStatus, newStatus });
  }
}

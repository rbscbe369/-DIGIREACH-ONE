import { OrderStatus } from '../value-objects/OrderStatus.vo';
import { OrderTotals } from '../value-objects/OrderTotals.vo';
import { OrderLine } from './OrderLine.entity';
import { InvalidOrderTransitionError } from '../errors/InvalidOrderTransitionError';
import { Money } from '@digireach-one/shared-kernel';
import { OutboxMessage } from '@digireach-one/core';
import { OrderIntegrationEvents } from '../events/OrderEvents';

export class Order {
  private currentLines: Map<string, OrderLine> = new Map();
  private pendingIntegrationEvents: OutboxMessage[] = [];

  public clearPendingIntegrationEvents(): OutboxMessage[] {
    const events = [...this.pendingIntegrationEvents];
    this.pendingIntegrationEvents = [];
    return events;
  }

  public addIntegrationEvent(event: OutboxMessage): void {
    this.pendingIntegrationEvents.push(event);
  }

  constructor(
    public readonly orderId: string,
    public readonly orderNumber: string,
    public readonly tenantId: string,
    public readonly organizationId: string | null,
    public readonly customerReference: string,
    public readonly sourceQuoteId: string,
    public readonly sourceQuoteVersion: number,
    public status: OrderStatus,
    public currentTotals: OrderTotals,
    public readonly createdAt: Date,
    public updatedAt: Date,
    public confirmedAt: Date | null,
    public completedAt: Date | null,
    public cancelledAt: Date | null,
  ) {}

  public addLine(line: OrderLine): void {
    if (this.status !== OrderStatus.Draft) {
      throw new InvalidOrderTransitionError('Can only add lines to Draft orders');
    }
    this.currentLines.set(line.lineId, line);
    this.recalculateTotals();
  }

  public getLines(): OrderLine[] {
    return Array.from(this.currentLines.values());
  }

  private recalculateTotals(): void {
    const lines = this.getLines();
    if (lines.length === 0) return;

    // Safety check: Ensure all lines share the same currency
    const currencyCode = lines[0]!.lineTotal.currencyCode;
    let subtotal = Money.fromMinorUnits(0, currencyCode);
    const adjustments = Money.fromMinorUnits(0, currencyCode); // Default order-level adjustment for now

    for (const line of lines) {
      if (line.lineTotal.currencyCode !== currencyCode) {
        throw new Error('Order lines must have identical currencies.');
      }
      subtotal = subtotal.add(line.lineTotal);
    }
    this.currentTotals = OrderTotals.create(subtotal, adjustments);
    this.updatedAt = new Date();
  }

  public transitionTo(newStatus: OrderStatus): void {
    const allowed: Record<string, string[]> = {
      [OrderStatus.Draft]: [OrderStatus.Confirmed, OrderStatus.Cancelled],
      [OrderStatus.Confirmed]: [OrderStatus.Processing, OrderStatus.Cancelled],
      [OrderStatus.Processing]: [OrderStatus.Completed, OrderStatus.Cancelled],
      [OrderStatus.Completed]: [],
      [OrderStatus.Cancelled]: [],
    };

    if (!allowed[this.status]?.includes(newStatus)) {
      throw new InvalidOrderTransitionError(
        `Cannot transition order from ${this.status} to ${newStatus}`,
      );
    }

    const now = new Date();
    if (newStatus === OrderStatus.Confirmed) this.confirmedAt = now;
    if (newStatus === OrderStatus.Completed) this.completedAt = now;
    if (newStatus === OrderStatus.Cancelled) this.cancelledAt = now;

    const oldStatus = this.status;
    this.status = newStatus;
    this.pendingIntegrationEvents.push(
      OrderIntegrationEvents.orderStatusChanged(this, oldStatus, newStatus),
    );
    this.updatedAt = now;
  }
}

import { OutboxMessageStatus } from '../value-objects/OutboxMessageStatus';

export class OutboxMessage {
  constructor(
    public readonly outboxMessageId: string,
    public readonly eventId: string,
    public readonly eventType: string,
    public readonly aggregateId: string,
    public readonly aggregateType: string,
    public readonly payload: string,
    public readonly metadata: string | null,
    public readonly correlationId: string | null,
    public readonly causationId: string | null,
    public readonly tenantId: string | null,
    public readonly occurredAt: Date,
    public readonly createdAt: Date,
    public status: OutboxMessageStatus,
    public attemptCount: number,
    public nextAttemptAt: Date | null,
    public publishedAt: Date | null,
    public lastError: string | null,
  ) {}

  public markProcessing(): void {
    this.status = OutboxMessageStatus.Processing;
  }

  public markPublished(publishedAt: Date): void {
    this.status = OutboxMessageStatus.Published;
    this.publishedAt = publishedAt;
    this.nextAttemptAt = null;
  }

  public markFailed(error: string, nextAttemptAt: Date): void {
    this.status = OutboxMessageStatus.Failed;
    this.lastError = error;
    this.attemptCount += 1;
    this.nextAttemptAt = nextAttemptAt;
  }
}

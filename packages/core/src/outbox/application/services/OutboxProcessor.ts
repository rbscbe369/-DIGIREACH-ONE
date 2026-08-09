import { IOutboxRepository } from '../interfaces/IOutboxRepository';
import { IEventPublisher } from '../interfaces/IEventPublisher';
import { RetryStrategy } from './RetryStrategy';
import { OutboxMessageStatus } from '../../domain/value-objects/OutboxMessageStatus';

export class OutboxProcessor {
  constructor(
    private readonly repository: IOutboxRepository,
    private readonly publisher: IEventPublisher,
    private readonly retryStrategy: RetryStrategy,
  ) {}

  public async processPending(batchSize: number, currentTime: Date = new Date()): Promise<void> {
    const messages = await this.repository.fetchPending(batchSize, currentTime);

    for (const message of messages) {
      if (
        message.status !== OutboxMessageStatus.Pending &&
        message.status !== OutboxMessageStatus.Failed
      ) {
        continue;
      }

      message.markProcessing();
      await this.repository.save(message);

      try {
        await this.publisher.publish(message);
        message.markPublished(new Date());
        await this.repository.save(message);
      } catch (error) {
        const errMessage = error instanceof Error ? error.message : String(error);
        const nextAttempt = this.retryStrategy.calculateNextAttempt(
          message.attemptCount + 1,
          new Date(),
        );
        if (nextAttempt) {
          message.markFailed(errMessage, nextAttempt);
        } else {
          message.status = OutboxMessageStatus.Failed;
          message.lastError = 'Max retries exceeded: ' + errMessage;
          message.nextAttemptAt = null;
        }
        await this.repository.save(message);
      }
    }
  }
}

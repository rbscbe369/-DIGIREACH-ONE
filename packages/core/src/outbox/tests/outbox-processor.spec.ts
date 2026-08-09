import { OutboxProcessor } from '../application/services/OutboxProcessor';
import { RetryStrategy } from '../application/services/RetryStrategy';
import { MemoryOutboxRepository } from '../infrastructure/repositories/MemoryOutboxRepository';
import { DummyEventPublisher } from '../infrastructure/publishers/DummyEventPublisher';
import { OutboxMessage } from '../domain/entities/OutboxMessage';
import { OutboxMessageStatus } from '../domain/value-objects/OutboxMessageStatus';

describe('OutboxProcessor', () => {
  let repository: MemoryOutboxRepository;
  let publisher: DummyEventPublisher;
  let processor: OutboxProcessor;

  beforeEach(() => {
    repository = new MemoryOutboxRepository();
    publisher = new DummyEventPublisher();
    processor = new OutboxProcessor(repository, publisher, new RetryStrategy());
  });

  it('should successfully publish a pending message', async () => {
    const msg = new OutboxMessage(
      '1',
      'ev1',
      'TypeA',
      'agg1',
      'AggType',
      '{}',
      null,
      null,
      null,
      null,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
    await repository.enqueue(msg);

    await processor.processPending(10);

    expect(publisher.publishedMessages.length).toBe(1);
    const saved = repository._getMessages()[0];
    expect(saved!.status).toBe(OutboxMessageStatus.Published);
    expect(saved!.publishedAt).toBeInstanceOf(Date);
  });

  it('should handle publication failure and make it retryable', async () => {
    const msg = new OutboxMessage(
      '1',
      'ev1',
      'TypeA',
      'agg1',
      'AggType',
      '{}',
      null,
      null,
      null,
      null,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
    await repository.enqueue(msg);

    publisher.shouldFail = true;
    await processor.processPending(10);

    expect(publisher.publishedMessages.length).toBe(0);
    const saved = repository._getMessages()[0];
    expect(saved!.status).toBe(OutboxMessageStatus.Failed);
    expect(saved!.attemptCount).toBe(1);
    expect(saved!.nextAttemptAt).toBeInstanceOf(Date);
  });
});

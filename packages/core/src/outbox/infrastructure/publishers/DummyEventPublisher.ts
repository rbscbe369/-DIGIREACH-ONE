import { IEventPublisher } from '../../application/interfaces/IEventPublisher';
import { OutboxMessage } from '../../domain/entities/OutboxMessage';

export class DummyEventPublisher implements IEventPublisher {
  public publishedMessages: OutboxMessage[] = [];
  public shouldFail = false;

  async publish(message: OutboxMessage): Promise<void> {
    if (this.shouldFail) {
      throw new Error('Simulated publication failure');
    }
    this.publishedMessages.push(message);
  }
}

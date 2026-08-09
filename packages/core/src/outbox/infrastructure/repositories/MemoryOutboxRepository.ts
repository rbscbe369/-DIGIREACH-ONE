import { IOutboxRepository } from '../../application/interfaces/IOutboxRepository';
import { OutboxMessage } from '../../domain/entities/OutboxMessage';
import { OutboxMessageStatus } from '../../domain/value-objects/OutboxMessageStatus';

export class MemoryOutboxRepository implements IOutboxRepository {
  private messages: Map<string, OutboxMessage> = new Map();

  async enqueue(message: OutboxMessage): Promise<void> {
    this.messages.set(message.outboxMessageId, message);
  }

  async fetchPending(batchSize: number, currentTime: Date): Promise<OutboxMessage[]> {
    const pending = Array.from(this.messages.values()).filter((m) => {
      if (m.status === OutboxMessageStatus.Pending) return true;
      if (
        m.status === OutboxMessageStatus.Failed &&
        m.nextAttemptAt &&
        m.nextAttemptAt <= currentTime
      )
        return true;
      return false;
    });

    return pending.slice(0, batchSize);
  }

  async save(message: OutboxMessage): Promise<void> {
    this.messages.set(message.outboxMessageId, message);
  }

  public _getMessages(): OutboxMessage[] {
    return Array.from(this.messages.values());
  }
}

import { OutboxMessage } from '../../domain/entities/OutboxMessage';

export interface IOutboxRepository {
  enqueue(message: OutboxMessage): Promise<void>;
  fetchPending(batchSize: number, currentTime: Date): Promise<OutboxMessage[]>;
  save(message: OutboxMessage): Promise<void>;
}

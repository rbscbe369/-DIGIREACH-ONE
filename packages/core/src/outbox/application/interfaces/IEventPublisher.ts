import { OutboxMessage } from '../../domain/entities/OutboxMessage';

export interface IEventPublisher {
  publish(message: OutboxMessage): Promise<void>;
}

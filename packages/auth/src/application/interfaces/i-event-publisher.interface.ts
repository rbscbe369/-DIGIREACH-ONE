import { DomainEvent } from '../../domain/events/domain.event';

export interface IEventPublisher {
  publish(events: DomainEvent[]): Promise<void>;
}
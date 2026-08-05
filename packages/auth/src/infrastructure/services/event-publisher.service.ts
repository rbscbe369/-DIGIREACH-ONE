import { IEventPublisher } from '../../application/interfaces/i-event-publisher.interface';
import { DomainEvent } from '../../domain/events/domain.event';

export class EventPublisher implements IEventPublisher {
  async publish(events: DomainEvent[]): Promise<void> {
    for (const event of events) {
      console.log(`[EventPublisher] Published ${event.eventName}`, event);
      // Integration with Redis/Kafka would go here
    }
  }
}
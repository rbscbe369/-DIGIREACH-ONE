import { DomainEvent } from './calendar.events';
export class AvailabilityUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AvailabilityUpdatedEvent';
  constructor(public readonly availabilityId: string) {}
}

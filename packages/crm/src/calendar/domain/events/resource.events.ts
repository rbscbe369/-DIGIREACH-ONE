import { DomainEvent } from './calendar.events';
export class ResourceReservedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ResourceReservedEvent';
  constructor(
    public readonly resourceId: string,
    public readonly reservationId: string,
  ) {}
}
export class ResourceReleasedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ResourceReleasedEvent';
  constructor(
    public readonly resourceId: string,
    public readonly reservationId: string,
  ) {}
}

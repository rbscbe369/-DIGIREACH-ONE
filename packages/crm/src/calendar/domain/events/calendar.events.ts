export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}
export class CalendarCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CalendarCreatedEvent';
  constructor(public readonly calendarId: string) {}
}
export class CalendarUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CalendarUpdatedEvent';
  constructor(public readonly calendarId: string) {}
}
export class CalendarDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CalendarDeletedEvent';
  constructor(public readonly calendarId: string) {}
}

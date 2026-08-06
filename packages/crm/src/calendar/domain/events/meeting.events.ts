import { DomainEvent } from './calendar.events';
export class MeetingScheduledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MeetingScheduledEvent';
  constructor(public readonly meetingId: string) {}
}
export class MeetingRescheduledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MeetingRescheduledEvent';
  constructor(public readonly meetingId: string) {}
}
export class MeetingCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MeetingCancelledEvent';
  constructor(public readonly meetingId: string) {}
}
export class MeetingStartedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MeetingStartedEvent';
  constructor(public readonly meetingId: string) {}
}
export class MeetingEndedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MeetingEndedEvent';
  constructor(public readonly meetingId: string) {}
}

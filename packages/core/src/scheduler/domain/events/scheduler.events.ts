export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class ScheduleCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleCreatedEvent';
  constructor(public readonly definitionId: string) {}
}

export class ScheduleRegisteredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleRegisteredEvent';
  constructor(public readonly registrationId: string) {}
}

export class ScheduleTriggeredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleTriggeredEvent';
  constructor(
    public readonly registrationId: string,
    public readonly payload: Record<string, unknown>,
    public readonly correlationId: string,
  ) {}
}

export class ScheduleExecutedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleExecutedEvent';
  constructor(public readonly historyId: string) {}
}

export class ScheduleSucceededEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleSucceededEvent';
  constructor(public readonly historyId: string) {}
}

export class ScheduleFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleFailedEvent';
  constructor(
    public readonly historyId: string,
    public readonly reason: string,
  ) {}
}

export class SchedulePausedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SchedulePausedEvent';
  constructor(public readonly registrationId: string) {}
}

export class ScheduleResumedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleResumedEvent';
  constructor(public readonly registrationId: string) {}
}

export class ScheduleCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleCancelledEvent';
  constructor(public readonly registrationId: string) {}
}

export class ScheduleExpiredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ScheduleExpiredEvent';
  constructor(public readonly registrationId: string) {}
}

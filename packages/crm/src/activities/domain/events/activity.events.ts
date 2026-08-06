export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class ActivityCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ActivityCreatedEvent';
  constructor(public readonly activityId: string) {}
}

export class ActivityUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ActivityUpdatedEvent';
  constructor(public readonly activityId: string) {}
}

export class ActivityCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ActivityCompletedEvent';
  constructor(public readonly activityId: string) {}
}

export class ActivityCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ActivityCancelledEvent';
  constructor(public readonly activityId: string) {}
}

export class ActivityDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ActivityDeletedEvent';
  constructor(public readonly activityId: string) {}
}

export class TaskAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskAssignedEvent';
  constructor(
    public readonly taskId: string,
    public readonly assigneeId: string,
  ) {}
}

export class TaskCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskCompletedEvent';
  constructor(public readonly taskId: string) {}
}

export class TaskReopenedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskReopenedEvent';
  constructor(public readonly taskId: string) {}
}

export class ReminderCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ReminderCreatedEvent';
  constructor(public readonly reminderId: string) {}
}

export class ReminderTriggeredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ReminderTriggeredEvent';
  constructor(public readonly reminderId: string) {}
}

export class ChecklistCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ChecklistCompletedEvent';
  constructor(public readonly activityId: string) {}
}

export class ParticipantAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantAddedEvent';
  constructor(
    public readonly activityId: string,
    public readonly participantId: string,
  ) {}
}

export class ParticipantRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantRemovedEvent';
  constructor(
    public readonly activityId: string,
    public readonly participantId: string,
  ) {}
}

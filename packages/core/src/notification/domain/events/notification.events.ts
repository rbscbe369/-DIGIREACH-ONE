export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class NotificationQueuedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationQueuedEvent';
  constructor(public readonly notificationId: string) {}
}

export class NotificationSentEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationSentEvent';
  constructor(
    public readonly notificationId: string,
    public readonly channel: string,
  ) {}
}

export class NotificationDeliveredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationDeliveredEvent';
  constructor(public readonly notificationId: string) {}
}

export class NotificationReadEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationReadEvent';
  constructor(public readonly notificationId: string) {}
}

export class NotificationFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationFailedEvent';
  constructor(
    public readonly notificationId: string,
    public readonly reason: string,
  ) {}
}

export class NotificationRetriedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationRetriedEvent';
  constructor(
    public readonly notificationId: string,
    public readonly attempt: number,
  ) {}
}

export class NotificationCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NotificationCancelledEvent';
  constructor(public readonly notificationId: string) {}
}

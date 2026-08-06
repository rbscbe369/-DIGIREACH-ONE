export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class AuditCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AuditCreatedEvent';
  constructor(public readonly auditId: string) {}
}

export class AuditArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AuditArchivedEvent';
  constructor(public readonly auditId: string) {}
}

export class RetentionExpiredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RetentionExpiredEvent';
  constructor(public readonly auditId: string) {}
}

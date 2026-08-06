export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class LeadCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadCreatedEvent';
  constructor(public readonly leadId: string) {}
}

export class LeadUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadUpdatedEvent';
  constructor(public readonly leadId: string) {}
}

export class LeadAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadAssignedEvent';
  constructor(
    public readonly leadId: string,
    public readonly assigneeId: string,
  ) {}
}

export class LeadReassignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadReassignedEvent';
  constructor(
    public readonly leadId: string,
    public readonly newAssigneeId: string,
  ) {}
}

export class LeadQualifiedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadQualifiedEvent';
  constructor(public readonly leadId: string) {}
}

export class LeadDisqualifiedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadDisqualifiedEvent';
  constructor(
    public readonly leadId: string,
    public readonly reason: string,
  ) {}
}

export class LeadConvertedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadConvertedEvent';
  constructor(public readonly leadId: string) {}
}

export class LeadMergedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadMergedEvent';
  constructor(
    public readonly primaryLeadId: string,
    public readonly duplicateLeadId: string,
  ) {}
}

export class LeadDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadDeletedEvent';
  constructor(public readonly leadId: string) {}
}

export class LeadScoredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadScoredEvent';
  constructor(
    public readonly leadId: string,
    public readonly newScore: number,
  ) {}
}

export class LeadDuplicateDetectedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadDuplicateDetectedEvent';
  constructor(
    public readonly leadId: string,
    public readonly duplicateLeadId: string,
  ) {}
}

export class LeadCommunicationAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadCommunicationAddedEvent';
  constructor(
    public readonly leadId: string,
    public readonly communicationId: string,
  ) {}
}

export class LeadActivityAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadActivityAddedEvent';
  constructor(
    public readonly leadId: string,
    public readonly activityId: string,
  ) {}
}

export class LeadTagAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadTagAddedEvent';
  constructor(
    public readonly leadId: string,
    public readonly tag: string,
  ) {}
}

export class LeadTagRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'LeadTagRemovedEvent';
  constructor(
    public readonly leadId: string,
    public readonly tag: string,
  ) {}
}

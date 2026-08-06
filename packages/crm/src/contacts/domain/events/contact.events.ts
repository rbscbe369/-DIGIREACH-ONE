export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class ContactCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactCreatedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactUpdatedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactMergedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactMergedEvent';
  constructor(
    public readonly masterContactId: string,
    public readonly mergedContactIds: string[],
  ) {}
}

export class ContactArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactArchivedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactDeletedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactActivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactActivatedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactDeactivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactDeactivatedEvent';
  constructor(public readonly contactId: string) {}
}

export class ContactCommunicationAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactCommunicationAddedEvent';
  constructor(
    public readonly contactId: string,
    public readonly communicationId: string,
  ) {}
}

export class ContactActivityAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactActivityAddedEvent';
  constructor(
    public readonly contactId: string,
    public readonly activityId: string,
  ) {}
}

export class ContactTagAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactTagAddedEvent';
  constructor(
    public readonly contactId: string,
    public readonly tag: string,
  ) {}
}

export class ContactTagRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactTagRemovedEvent';
  constructor(
    public readonly contactId: string,
    public readonly tag: string,
  ) {}
}

export class ContactConvertedFromLeadEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContactConvertedFromLeadEvent';
  constructor(
    public readonly contactId: string,
    public readonly originalLeadId: string,
  ) {}
}

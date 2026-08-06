export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class AccountCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountCreatedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountUpdatedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountActivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountActivatedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountDeactivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountDeactivatedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountArchivedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountDeletedEvent';
  constructor(public readonly accountId: string) {}
}

export class AccountMergedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountMergedEvent';
  constructor(
    public readonly masterAccountId: string,
    public readonly mergedAccountIds: string[],
  ) {}
}

export class AccountHierarchyChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountHierarchyChangedEvent';
  constructor(
    public readonly accountId: string,
    public readonly newParentId: string | null,
  ) {}
}

export class AccountBranchAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountBranchAddedEvent';
  constructor(
    public readonly accountId: string,
    public readonly branchId: string,
  ) {}
}

export class AccountRelationshipAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountRelationshipAddedEvent';
  constructor(
    public readonly accountId: string,
    public readonly targetId: string,
  ) {}
}

export class AccountConvertedFromLeadEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountConvertedFromLeadEvent';
  constructor(
    public readonly accountId: string,
    public readonly originalLeadId: string,
  ) {}
}

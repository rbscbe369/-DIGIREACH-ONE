export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class OrganizationCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationCreatedEvent';
  constructor(public readonly organizationId: string) {}
}

export class OrganizationUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationUpdatedEvent';
  constructor(public readonly organizationId: string) {}
}

export class OrganizationDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationDeletedEvent';
  constructor(public readonly organizationId: string) {}
}

export class OrganizationNodeAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationNodeAddedEvent';
  constructor(
    public readonly nodeId: string,
    public readonly parentId: string | null,
  ) {}
}

export class OrganizationNodeMovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationNodeMovedEvent';
  constructor(
    public readonly nodeId: string,
    public readonly oldParentId: string | null,
    public readonly newParentId: string | null,
  ) {}
}

export class OrganizationNodeRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationNodeRemovedEvent';
  constructor(public readonly nodeId: string) {}
}

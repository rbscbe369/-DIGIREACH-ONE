import { DomainEvent } from '../../events/domain.event';

export class ContextResolvedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContextResolvedEvent';
  constructor(
    public readonly contextId: string,
    public readonly userId: string,
  ) {}
}

export class ContextChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ContextChangedEvent';
  constructor(
    public readonly previousContextId: string,
    public readonly newContextId: string,
  ) {}
}

export class WorkspaceChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkspaceChangedEvent';
  constructor(
    public readonly contextId: string,
    public readonly workspaceId: string,
  ) {}
}

export class OrganizationChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrganizationChangedEvent';
  constructor(
    public readonly contextId: string,
    public readonly organizationId: string,
  ) {}
}

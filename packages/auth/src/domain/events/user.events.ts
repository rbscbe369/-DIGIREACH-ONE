import { DomainEvent } from './domain.event';
import { UserId, OrganizationId } from '../value-objects/id.vo';

export class UserCreated implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'UserCreated';
  constructor(public readonly userId: UserId, public readonly organizationId: OrganizationId) {}
}

export class UserActivated implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'UserActivated';
  constructor(public readonly userId: UserId) {}
}

export class UserSuspended implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'UserSuspended';
  constructor(public readonly userId: UserId, public readonly reason: string) {}
}
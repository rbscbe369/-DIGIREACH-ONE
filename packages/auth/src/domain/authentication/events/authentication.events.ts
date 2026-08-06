import { DomainEvent } from '../../events/domain.event';

export class UserLoggedInEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'UserLoggedInEvent';
  constructor(
    public readonly userId: string,
    public readonly sessionId: string,
    public readonly deviceId: string,
  ) {}
}

export class UserLoggedOutEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'UserLoggedOutEvent';
  constructor(
    public readonly userId: string,
    public readonly sessionId: string,
  ) {}
}

export class PasswordChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PasswordChangedEvent';
  constructor(public readonly userId: string) {}
}

export class PasswordResetEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PasswordResetEvent';
  constructor(public readonly userId: string) {}
}

export class AccountLockedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountLockedEvent';
  constructor(
    public readonly userId: string,
    public readonly reason: string,
  ) {}
}

export class AccountUnlockedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AccountUnlockedEvent';
  constructor(public readonly userId: string) {}
}

export class SessionRevokedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SessionRevokedEvent';
  constructor(
    public readonly sessionId: string,
    public readonly reason: string,
  ) {}
}

export class RefreshTokenRotatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RefreshTokenRotatedEvent';
  constructor(public readonly sessionId: string) {}
}

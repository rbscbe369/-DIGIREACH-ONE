import { DomainEvent } from './domain.event';
import { SessionId, UserId } from '../value-objects/id.vo';

export class SessionStarted implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SessionStarted';
  constructor(
    public readonly sessionId: SessionId,
    public readonly userId: UserId,
  ) {}
}
export class SessionEnded implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SessionEnded';
  constructor(
    public readonly sessionId: SessionId,
    public readonly reason: string,
  ) {}
}

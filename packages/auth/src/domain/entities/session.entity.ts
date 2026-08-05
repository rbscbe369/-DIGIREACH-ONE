import { Entity } from './entity';
import { SessionId, UserId, DeviceId, WorkspaceId } from '../value-objects/id.vo';
import { SessionStarted, SessionEnded } from '../events/session.events';

export enum SessionStatus {
  ACTIVE = 'ACTIVE',
  TERMINATED = 'TERMINATED',
  EXPIRED = 'EXPIRED'
}

export class Session extends Entity<SessionId> {
  private _status: SessionStatus;
  
  constructor(
    id: SessionId,
    public readonly userId: UserId,
    public readonly deviceId: DeviceId,
    public readonly workspaceId: WorkspaceId,
    public readonly expiresAt: Date,
    status: SessionStatus = SessionStatus.ACTIVE
  ) {
    super(id);
    this._status = status;
  }

  public static start(
    id: SessionId, userId: UserId, deviceId: DeviceId, workspaceId: WorkspaceId, ttlMinutes: number
  ): Session {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + ttlMinutes);
    const session = new Session(id, userId, deviceId, workspaceId, expiresAt, SessionStatus.ACTIVE);
    session.addDomainEvent(new SessionStarted(id, userId));
    return session;
  }

  get status(): SessionStatus {
    if (this._status === SessionStatus.ACTIVE && new Date() > this.expiresAt) {
      return SessionStatus.EXPIRED;
    }
    return this._status;
  }

  public terminate(reason: string): void {
    if (this._status !== SessionStatus.ACTIVE) return;
    this._status = SessionStatus.TERMINATED;
    this.addDomainEvent(new SessionEnded(this.id, reason));
  }
}
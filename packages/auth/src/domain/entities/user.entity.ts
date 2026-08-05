import { Entity } from './entity';
import { UserId, OrganizationId } from '../value-objects/id.vo';
import { EmailAddress } from '../value-objects/email-address.vo';
import { UserCreated, UserActivated, UserSuspended } from '../events/user.events';
import { UserSuspendedException, UserNotActiveException } from '../exceptions/user.exceptions';

export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  OFFBOARDED = 'OFFBOARDED'
}

export class User extends Entity<UserId> {
  private _status: UserStatus;

  constructor(
    id: UserId,
    public readonly organizationId: OrganizationId,
    public readonly email: EmailAddress,
    status: UserStatus = UserStatus.PENDING
  ) {
    super(id);
    this._status = status;
  }

  public static create(id: UserId, organizationId: OrganizationId, email: EmailAddress): User {
    const user = new User(id, organizationId, email, UserStatus.PENDING);
    user.addDomainEvent(new UserCreated(id, organizationId));
    return user;
  }

  get status(): UserStatus { return this._status; }

  public activate(): void {
    if (this._status !== UserStatus.PENDING && this._status !== UserStatus.SUSPENDED) return;
    this._status = UserStatus.ACTIVE;
    this.addDomainEvent(new UserActivated(this.id));
  }

  public suspend(reason: string): void {
    if (this._status === UserStatus.OFFBOARDED) return;
    this._status = UserStatus.SUSPENDED;
    this.addDomainEvent(new UserSuspended(this.id, reason));
  }

  public ensureCanAuthenticate(): void {
    if (this._status === UserStatus.SUSPENDED) {
      throw new UserSuspendedException(this.id.value);
    }
    if (this._status !== UserStatus.ACTIVE) {
      throw new UserNotActiveException(this.id.value);
    }
  }
}
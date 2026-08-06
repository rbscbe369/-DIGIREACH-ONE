import { Entity } from './entity';
import { OrganizationId } from '../value-objects/id.vo';
import { InvalidOrganizationStateException } from '../exceptions/organization.exceptions';

export enum OrganizationStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DELETED = 'DELETED',
}

export class Organization extends Entity<OrganizationId> {
  private _status: OrganizationStatus;

  constructor(
    id: OrganizationId,
    public readonly name: string,
    public readonly slug: string,
    status: OrganizationStatus = OrganizationStatus.ACTIVE,
  ) {
    super(id);
    this._status = status;
  }

  get status(): OrganizationStatus {
    return this._status;
  }

  public suspend(_reason: string): void {
    if (this._status === OrganizationStatus.DELETED) {
      throw new InvalidOrganizationStateException('Cannot suspend a deleted organization');
    }
    this._status = OrganizationStatus.SUSPENDED;
    // this.addDomainEvent(new OrganizationSuspended(this.id, reason));
  }

  public activate(): void {
    if (this._status === OrganizationStatus.DELETED) {
      throw new InvalidOrganizationStateException('Cannot activate a deleted organization');
    }
    this._status = OrganizationStatus.ACTIVE;
  }
}

import { Entity } from './entity';
import { RoleId, OrganizationId, PermissionId } from '../value-objects/id.vo';

export class Role extends Entity<RoleId> {
  private _permissions: Set<string>;
  
  constructor(
    id: RoleId,
    public readonly organizationId: OrganizationId | null, // null if system role
    public readonly name: string,
    permissionIds: PermissionId[] = []
  ) {
    super(id);
    this._permissions = new Set(permissionIds.map(p => p.value));
  }

  get permissions(): PermissionId[] {
    return Array.from(this._permissions).map(val => new PermissionId(val));
  }
}
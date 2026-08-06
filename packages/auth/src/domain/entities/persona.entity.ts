import { Entity } from './entity';
import { PersonaId, OrganizationId, RoleId } from '../value-objects/id.vo';

export class Persona extends Entity<PersonaId> {
  private _roles: Set<string>; // Storing RoleId values for uniqueness

  constructor(
    id: PersonaId,
    public readonly organizationId: OrganizationId,
    public readonly name: string,
    roleIds: RoleId[] = [],
  ) {
    super(id);
    this._roles = new Set(roleIds.map((r) => r.value));
  }

  get roles(): RoleId[] {
    return Array.from(this._roles).map((val) => new RoleId(val));
  }

  public assignRole(roleId: RoleId): void {
    this._roles.add(roleId.value);
  }

  public removeRole(roleId: RoleId): void {
    this._roles.delete(roleId.value);
  }
}

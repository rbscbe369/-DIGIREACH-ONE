import { Role } from '../entities/role.entity';
import { RoleId, OrganizationId } from '../value-objects/id.vo';

export interface IRoleRepository {
  findById(id: RoleId): Promise<Role | null>;
  findSystemRoles(): Promise<Role[]>;
  findByOrganization(organizationId: OrganizationId): Promise<Role[]>;
  save(role: Role): Promise<void>;
}
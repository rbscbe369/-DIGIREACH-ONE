import { RoleModel } from '../prisma/interfaces';
import { Role } from '../../../domain/entities/role.entity';
import { RoleId, OrganizationId, PermissionId } from '../../../domain/value-objects/id.vo';

export class RoleMapper {
  static toDomain(raw: RoleModel): Role {
    const permIds = Array.isArray(raw.permissions)
      ? raw.permissions.map(
          (p: unknown) =>
            new PermissionId(
              ((p as Record<string, unknown>).permissionId as string) || (p as string),
            ),
        )
      : [];
    return new Role(
      new RoleId(raw.id),
      raw.organizationId ? new OrganizationId(raw.organizationId) : null,
      raw.name,
      permIds,
    );
  }

  static toPersistence(role: Role): RoleModel {
    return {
      id: role.id.value,
      organizationId: role.organizationId ? role.organizationId.value : null,
      name: role.name,
      permissions: role.permissions.map((p) => p.value),
    };
  }
}

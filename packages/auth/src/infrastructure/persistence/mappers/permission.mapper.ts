import { PermissionModel } from '../prisma/interfaces';
import { Permission } from '../../../domain/entities/permission.entity';
import { PermissionId } from '../../../domain/value-objects/id.vo';

export class PermissionMapper {
  static toDomain(raw: PermissionModel): Permission {
    return new Permission(new PermissionId(raw.id), raw.claim, raw.description);
  }

  static toPersistence(permission: Permission): PermissionModel {
    return {
      id: permission.id.value,
      claim: permission.claim,
      description: permission.description,
    };
  }
}

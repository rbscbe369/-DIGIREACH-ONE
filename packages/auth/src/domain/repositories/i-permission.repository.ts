import { Permission } from '../entities/permission.entity';
import { PermissionId } from '../value-objects/id.vo';

export interface IPermissionRepository {
  findById(id: PermissionId): Promise<Permission | null>;
  findAll(): Promise<Permission[]>;
  findByClaim(claim: string): Promise<Permission | null>;
}

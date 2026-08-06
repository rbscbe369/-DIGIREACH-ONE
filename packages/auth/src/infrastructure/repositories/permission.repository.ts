import { BaseRepository } from './base.repository';
import { IPrismaClient, PermissionModel } from '../persistence/prisma/interfaces';
import { IPermissionRepository } from '../../domain/repositories/i-permission.repository';
import { Permission } from '../../domain/entities/permission.entity';
import { PermissionId } from '../../domain/value-objects/id.vo';
import { PermissionMapper } from '../persistence/mappers/permission.mapper';

export class PermissionRepository
  extends BaseRepository<Permission, PermissionId>
  implements IPermissionRepository
{
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }

  async findById(id: PermissionId): Promise<Permission | null> {
    const data = await this.prisma.permission.findUnique({ where: { id: id.value } });
    return data ? PermissionMapper.toDomain(data) : null;
  }

  async findAll(): Promise<Permission[]> {
    const data = await this.prisma.permission.findMany();
    return data.map((d: PermissionModel) => PermissionMapper.toDomain(d));
  }

  async findByClaim(claim: string): Promise<Permission | null> {
    const data = await this.prisma.permission.findUnique({ where: { claim } });
    return data ? PermissionMapper.toDomain(data) : null;
  }
}

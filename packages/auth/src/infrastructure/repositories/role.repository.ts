import { BaseRepository } from './base.repository';
import { IPrismaClient, RoleModel } from '../persistence/prisma/interfaces';
import { IRoleRepository } from '../../domain/repositories/i-role.repository';
import { Role } from '../../domain/entities/role.entity';
import { RoleId, OrganizationId } from '../../domain/value-objects/id.vo';
import { RoleMapper } from '../persistence/mappers/role.mapper';

export class RoleRepository extends BaseRepository<Role, RoleId> implements IRoleRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }

  async findById(id: RoleId): Promise<Role | null> {
    const data = await this.prisma.role.findUnique({
      where: { id: id.value },
      include: { permissions: true },
    });
    return data ? RoleMapper.toDomain(data) : null;
  }

  async findSystemRoles(): Promise<Role[]> {
    const data = await this.prisma.role.findMany({
      where: { organizationId: null },
      include: { permissions: true },
    });
    return data.map((d: RoleModel) => RoleMapper.toDomain(d));
  }

  async findByOrganization(orgId: OrganizationId): Promise<Role[]> {
    const data = await this.prisma.role.findMany({
      where: { organizationId: orgId.value },
      include: { permissions: true },
    });
    return data.map((d: RoleModel) => RoleMapper.toDomain(d));
  }

  async save(role: Role): Promise<void> {
    const data = RoleMapper.toPersistence(role);
    await this.prisma.role.upsert({
      where: { id: data.id },
      update: { name: data.name },
      create: { id: data.id, organizationId: data.organizationId, name: data.name },
    });
  }
}

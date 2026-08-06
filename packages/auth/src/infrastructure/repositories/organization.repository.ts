import { BaseRepository } from './base.repository';
import { IPrismaClient } from '../persistence/prisma/interfaces';
import { IOrganizationRepository } from '../../domain/repositories/i-organization.repository';
import { Organization } from '../../domain/entities/organization.entity';
import { OrganizationId } from '../../domain/value-objects/id.vo';
import { OrganizationMapper } from '../persistence/mappers/organization.mapper';

export class OrganizationRepository
  extends BaseRepository<Organization, OrganizationId>
  implements IOrganizationRepository
{
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }

  async findById(id: OrganizationId): Promise<Organization | null> {
    const data = await this.prisma.organization.findUnique({ where: { id: id.value } });
    return data ? OrganizationMapper.toDomain(data) : null;
  }

  async findBySlug(slug: string): Promise<Organization | null> {
    const data = await this.prisma.organization.findUnique({ where: { slug } });
    return data ? OrganizationMapper.toDomain(data) : null;
  }

  async save(org: Organization): Promise<void> {
    const data = OrganizationMapper.toPersistence(org);
    await this.prisma.organization.upsert({
      where: { id: data.id },
      update: data,
      create: data,
    });
  }
}

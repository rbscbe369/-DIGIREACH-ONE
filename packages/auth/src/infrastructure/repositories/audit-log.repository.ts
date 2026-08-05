import { BaseRepository } from './base.repository';
import { IPrismaClient, AuditLogModel } from '../persistence/prisma/interfaces';
import { IAuditLogRepository } from '../../domain/repositories/i-audit-log.repository';
import { AuditLog } from '../../domain/entities/audit-log.entity';
import { OrganizationId } from '../../domain/value-objects/id.vo';
import { AuditLogMapper } from '../persistence/mappers/audit-log.mapper';

export class AuditLogRepository extends BaseRepository<AuditLog, OrganizationId> implements IAuditLogRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }


  async save(log: AuditLog): Promise<void> {
    const data = AuditLogMapper.toPersistence(log);
    await this.prisma.auditLog.create({ data });
  }

  async findByOrganization(orgId: OrganizationId, limit: number, offset: number): Promise<AuditLog[]> {
    const data = await this.prisma.auditLog.findMany({
      where: { organizationId: orgId.value },
      take: limit,
      skip: offset,
      orderBy: { timestamp: 'desc' }
    });
    return data.map((d: AuditLogModel) => AuditLogMapper.toDomain(d));
  }
}
import { AuditLog } from '../entities/audit-log.entity';
import { OrganizationId } from '../value-objects/id.vo';

export interface IAuditLogRepository {
  save(log: AuditLog): Promise<void>;
  findByOrganization(
    organizationId: OrganizationId,
    limit: number,
    offset: number,
  ): Promise<AuditLog[]>;
}

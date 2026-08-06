import { AuditLogModel } from '../prisma/interfaces';
import { AuditLog } from '../../../domain/entities/audit-log.entity';
import { AuditLogId, UserId, OrganizationId, SessionId } from '../../../domain/value-objects/id.vo';

export class AuditLogMapper {
  static toDomain(raw: AuditLogModel): AuditLog {
    return new AuditLog(
      new AuditLogId(raw.id),
      new OrganizationId(raw.organizationId),
      new UserId(raw.actorId),
      raw.sessionId ? new SessionId(raw.sessionId) : null,
      raw.action,
      raw.targetEntityId,
      raw.targetEntityType,
      new Date(raw.timestamp),
      raw.ipAddress,
    );
  }

  static toPersistence(log: AuditLog): AuditLogModel {
    return {
      id: log.id.value,
      organizationId: log.organizationId.value,
      actorId: log.actorId.value,
      sessionId: log.sessionId ? log.sessionId.value : null,
      action: log.action,
      targetEntityId: log.targetEntityId,
      targetEntityType: log.targetEntityType,
      timestamp: log.timestamp.toISOString(),
      ipAddress: log.ipAddress,
    };
  }
}

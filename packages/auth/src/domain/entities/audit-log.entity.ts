import { Entity } from './entity';
import { AuditLogId, UserId, OrganizationId, SessionId } from '../value-objects/id.vo';

export class AuditLog extends Entity<AuditLogId> {
  constructor(
    id: AuditLogId,
    public readonly organizationId: OrganizationId,
    public readonly actorId: UserId,
    public readonly sessionId: SessionId | null,
    public readonly action: string,
    public readonly targetEntityId: string,
    public readonly targetEntityType: string,
    public readonly timestamp: Date,
    public readonly ipAddress: string
  ) {
    super(id);
    // Audit logs are strictly immutable. No mutable state is defined.
  }
}
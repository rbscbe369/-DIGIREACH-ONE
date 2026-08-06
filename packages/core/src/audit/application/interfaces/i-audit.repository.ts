import { AuditEntry } from '../../domain/entities/audit-entry.entity';

export interface IAuditRepository {
  save(entry: AuditEntry): Promise<void>;

  // Basic search filters
  search(filters: {
    correlationId?: string;
    traceId?: string;
    organizationId?: string;
    actorId?: string;
    targetId?: string;
    category?: string;
    severity?: string;
    startTime?: Date;
    endTime?: Date;
  }): Promise<AuditEntry[]>;

  timeline(targetId: string): Promise<AuditEntry[]>;
  archive(id: string): Promise<void>;

  // Strictly NO update() or delete()
}

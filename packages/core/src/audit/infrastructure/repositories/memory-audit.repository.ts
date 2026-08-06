import { IAuditRepository } from '../../application/interfaces/i-audit.repository';
import { AuditEntry } from '../../domain/entities/audit-entry.entity';
import { AuditStoragePolicy } from '../../domain/value-objects/audit-storage-policy.vo';

export class MemoryAuditRepository implements IAuditRepository {
  private entries = new Map<string, AuditEntry>();

  async save(entry: AuditEntry): Promise<void> {
    this.entries.set(entry.id, entry);
  }

  async search(filters: Parameters<IAuditRepository['search']>[0]): Promise<AuditEntry[]> {
    const results: AuditEntry[] = [];
    for (const entry of this.entries.values()) {
      let matches = true;
      if (filters.correlationId && entry.context.correlationId !== filters.correlationId)
        matches = false;
      if (filters.traceId && entry.context.traceId !== filters.traceId) matches = false;
      if (filters.organizationId && entry.actor.organizationId !== filters.organizationId)
        matches = false;
      if (filters.actorId && entry.actor.actorId !== filters.actorId) matches = false;
      if (filters.targetId && entry.target.targetId !== filters.targetId) matches = false;
      if (filters.category && entry.category !== filters.category) matches = false;
      if (filters.severity && entry.severity !== filters.severity) matches = false;
      if (filters.startTime && entry.timestamp < filters.startTime) matches = false;
      if (filters.endTime && entry.timestamp > filters.endTime) matches = false;

      if (matches) results.push(entry);
    }
    return results;
  }

  async timeline(targetId: string): Promise<AuditEntry[]> {
    const results = Array.from(this.entries.values()).filter((e) => e.target.targetId === targetId);
    return results.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  async archive(id: string): Promise<void> {
    const entry = this.entries.get(id);
    if (!entry) return;

    const archivedEntry = new AuditEntry(
      entry.id,
      entry.timestamp,
      entry.event,
      entry.context,
      entry.actor,
      entry.target,
      entry.category,
      entry.severity,
      entry.compliance,
      AuditStoragePolicy.ARCHIVE, // Mutated safely via new instance constructor
      entry.hash,
      entry.previousHash,
      entry.signature,
      entry.integrityStatus,
    );
    this.entries.set(id, archivedEntry);
  }
}

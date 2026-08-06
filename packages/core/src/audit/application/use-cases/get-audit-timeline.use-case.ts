import { IAuditRepository } from '../interfaces/i-audit.repository';
import { AuditEntry } from '../../domain/entities/audit-entry.entity';

export class GetAuditTimelineUseCase {
  constructor(private readonly repo: IAuditRepository) {}

  async execute(targetId: string): Promise<AuditEntry[]> {
    return this.repo.timeline(targetId);
  }
}

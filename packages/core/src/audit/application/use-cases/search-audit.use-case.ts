import { IAuditRepository } from '../interfaces/i-audit.repository';
import { AuditEntry } from '../../domain/entities/audit-entry.entity';

export class SearchAuditUseCase {
  constructor(private readonly repo: IAuditRepository) {}

  async execute(filters: Parameters<IAuditRepository['search']>[0]): Promise<AuditEntry[]> {
    return this.repo.search(filters);
  }
}

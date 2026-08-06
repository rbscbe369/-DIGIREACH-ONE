import { IAuditRepository } from '../interfaces/i-audit.repository';
import { AuditEntry } from '../../domain/entities/audit-entry.entity';

export class CreateAuditEntryUseCase {
  constructor(private readonly repo: IAuditRepository) {}

  async execute(entry: AuditEntry): Promise<void> {
    await this.repo.save(entry);
  }
}

import { AuditEntry } from '../../domain/entities/audit-entry.entity';
import { CreateAuditEntryUseCase } from '../use-cases/create-audit-entry.use-case';

export class AuditPublisher {
  constructor(private readonly createUseCase: CreateAuditEntryUseCase) {}

  async publish(entry: AuditEntry): Promise<void> {
    await this.createUseCase.execute(entry);
  }
}

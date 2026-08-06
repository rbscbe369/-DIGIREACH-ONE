import { CreateAuditEntryUseCase } from '../use-cases/create-audit-entry.use-case';
import { ArchiveAuditUseCase } from '../use-cases/archive-audit.use-case';

export class AuditService {
  constructor(
    public readonly createUseCase: CreateAuditEntryUseCase,
    public readonly archiveUseCase: ArchiveAuditUseCase,
  ) {}
}

import { IAuditRepository } from '../interfaces/i-audit.repository';

export class ArchiveAuditUseCase {
  constructor(private readonly repo: IAuditRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.archive(id);
  }
}

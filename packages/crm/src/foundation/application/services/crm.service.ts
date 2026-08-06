import { ICRMRepository } from '../interfaces/i-crm.repository';

export class CRMService {
  constructor(private readonly repo: ICRMRepository) {}

  async initializeTenant(tenantId: string): Promise<void> {
    await this.repo.save({ tenantId, initializedAt: new Date() });
  }
}

import { ICRMAssistantRepository } from '../interfaces/i-crm-assistant.repository';
import { CRMAssistant } from '../../domain/entities/crm-assistant.entity';
export class CRMAssistantService {
  constructor(private readonly repo: ICRMAssistantRepository) {}
  async getAssistant(id: string): Promise<CRMAssistant | null> {
    return this.repo.findById(id);
  }
}

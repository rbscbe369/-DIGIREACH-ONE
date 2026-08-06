import { ICRMAssistantRepository } from '../../application/interfaces/i-crm-assistant.repository';
import { CRMAssistant } from '../../domain/entities/crm-assistant.entity';

export class MemoryAssistantRepository implements ICRMAssistantRepository {
  private records = new Map<string, CRMAssistant>();
  async findById(id: string): Promise<CRMAssistant | null> {
    return this.records.get(id) || null;
  }
  async save(assistant: CRMAssistant): Promise<void> {
    this.records.set(assistant.assistantId, assistant);
  }
}

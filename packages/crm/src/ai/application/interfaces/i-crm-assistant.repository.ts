import { CRMAssistant } from '../../domain/entities/crm-assistant.entity';
export interface ICRMAssistantRepository {
  findById(id: string): Promise<CRMAssistant | null>;
  save(assistant: CRMAssistant): Promise<void>;
}

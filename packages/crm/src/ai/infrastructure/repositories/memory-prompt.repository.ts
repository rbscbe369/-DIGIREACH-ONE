import { ICRMPromptRepository } from '../../application/interfaces/i-crm-prompt.repository';
import { PromptTemplate } from '../../domain/entities/prompt-template.entity';

export class MemoryPromptRepository implements ICRMPromptRepository {
  private records = new Map<string, PromptTemplate>();
  async findByName(name: string): Promise<PromptTemplate | null> {
    for (const prompt of Array.from(this.records.values())) {
      if (prompt.name === name) return prompt;
    }
    return null;
  }
}

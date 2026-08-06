import { IAIPromptRepository } from '../../application/interfaces/i-ai-prompt.repository';
import { AIPromptTemplate } from '../../domain/entities/ai-prompt-template.entity';

export class MemoryPromptRepository implements IAIPromptRepository {
  private templates = new Map<string, AIPromptTemplate>();

  async findById(id: string): Promise<AIPromptTemplate | null> {
    return this.templates.get(id) || null;
  }

  async save(template: AIPromptTemplate): Promise<void> {
    this.templates.set(template.id, template);
  }
}

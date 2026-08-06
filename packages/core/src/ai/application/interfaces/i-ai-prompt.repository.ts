import { AIPromptTemplate } from '../../domain/entities/ai-prompt-template.entity';

export interface IAIPromptRepository {
  findById(id: string): Promise<AIPromptTemplate | null>;
  save(template: AIPromptTemplate): Promise<void>;
}

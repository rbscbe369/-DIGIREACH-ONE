import { PromptTemplate } from '../../domain/entities/prompt-template.entity';
export interface ICRMPromptRepository {
  findByName(name: string): Promise<PromptTemplate | null>;
}

import { PromptTemplate } from '../../domain/entities/prompt-template.entity';
import { PromptContext } from '../../domain/value-objects/prompt-context.vo';
export class PromptAssembler {
  assemble(_template: PromptTemplate, _context: PromptContext): string {
    return 'Assembled Prompt String';
  }
}

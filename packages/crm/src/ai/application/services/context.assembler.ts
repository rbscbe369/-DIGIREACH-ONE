import { ICRMContextAssembler } from '../interfaces/i-crm-context.assembler';
import { PromptContext } from '../../domain/value-objects/prompt-context.vo';
export class ContextAssemblerService implements ICRMContextAssembler {
  async assembleContext(_entityId: string, _entityType: string): Promise<PromptContext> {
    return new PromptContext({}, 'Context Payload');
  }
}

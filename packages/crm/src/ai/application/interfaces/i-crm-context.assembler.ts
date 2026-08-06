import { PromptContext } from '../../domain/value-objects/prompt-context.vo';
export interface ICRMContextAssembler {
  assembleContext(entityId: string, entityType: string): Promise<PromptContext>;
}

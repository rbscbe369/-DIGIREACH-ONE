import { IWorkflowDefinitionRepository } from '../../application/interfaces/i-workflow-definition.repository';
import { WorkflowDefinition } from '../../domain/entities/workflow-definition.entity';

export class MemoryWorkflowDefinitionRepository implements IWorkflowDefinitionRepository {
  private definitions = new Map<string, WorkflowDefinition>();

  async findById(id: string): Promise<WorkflowDefinition | null> {
    return this.definitions.get(id) || null;
  }

  async save(definition: WorkflowDefinition): Promise<void> {
    this.definitions.set(definition.id, definition);
  }
}

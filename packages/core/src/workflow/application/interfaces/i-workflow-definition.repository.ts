import { WorkflowDefinition } from '../../domain/entities/workflow-definition.entity';

export interface IWorkflowDefinitionRepository {
  findById(id: string): Promise<WorkflowDefinition | null>;
  save(definition: WorkflowDefinition): Promise<void>;
}

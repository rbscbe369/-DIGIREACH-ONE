import { WorkflowInstance } from '../../domain/entities/workflow-instance.entity';

export interface IWorkflowRepository {
  findById(id: string): Promise<WorkflowInstance | null>;
  save(instance: WorkflowInstance): Promise<void>;
}

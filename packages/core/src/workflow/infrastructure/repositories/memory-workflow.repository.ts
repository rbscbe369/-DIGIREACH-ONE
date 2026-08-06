import { IWorkflowRepository } from '../../application/interfaces/i-workflow.repository';
import { WorkflowInstance } from '../../domain/entities/workflow-instance.entity';

export class MemoryWorkflowRepository implements IWorkflowRepository {
  private instances = new Map<string, WorkflowInstance>();

  async findById(id: string): Promise<WorkflowInstance | null> {
    return this.instances.get(id) || null;
  }

  async save(instance: WorkflowInstance): Promise<void> {
    this.instances.set(instance.id, instance);
  }
}

import { IWorkflowRepository } from '../interfaces/i-workflow.repository';
import { IWorkflowDefinitionRepository } from '../interfaces/i-workflow-definition.repository';
import { IWorkflowEventPublisher } from '../interfaces/i-workflow-event.publisher';
import { WorkflowInstance } from '../../domain/entities/workflow-instance.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';
import { WorkflowStatus } from '../../domain/value-objects/workflow-status.vo';
import { WorkflowStartedEvent } from '../../domain/events/workflow.events';

export class StartWorkflowUseCase {
  constructor(
    private readonly instanceRepo: IWorkflowRepository,
    private readonly definitionRepo: IWorkflowDefinitionRepository,
    private readonly eventPublisher: IWorkflowEventPublisher,
  ) {}

  async execute(
    definitionId: string,
    versionId: string,
    context: WorkflowContext,
  ): Promise<WorkflowInstance> {
    const definition = await this.definitionRepo.findById(definitionId);
    if (!definition) throw new Error('Definition not found');

    const version = definition.versions.find((v) => v.id === versionId);
    if (!version) throw new Error('Version not found');

    const instanceId = Date.now().toString(); // simple ID gen
    const instance = new WorkflowInstance(
      instanceId,
      definitionId,
      versionId,
      context,
      WorkflowStatus.RUNNING,
      version.initialStepId,
      [],
      new Date(),
    );

    await this.instanceRepo.save(instance);
    await this.eventPublisher.publish(new WorkflowStartedEvent(instanceId));

    return instance;
  }
}

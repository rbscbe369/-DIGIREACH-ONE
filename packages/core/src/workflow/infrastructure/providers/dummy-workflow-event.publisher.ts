import { IWorkflowEventPublisher } from '../../application/interfaces/i-workflow-event.publisher';
import { DomainEvent } from '../../domain/events/workflow.events';

export class DummyWorkflowEventPublisher implements IWorkflowEventPublisher {
  async publish(_event: DomainEvent): Promise<void> {}
}

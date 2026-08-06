import { DomainEvent } from '../../domain/events/workflow.events';

export interface IWorkflowEventPublisher {
  publish(event: DomainEvent): Promise<void>;
}

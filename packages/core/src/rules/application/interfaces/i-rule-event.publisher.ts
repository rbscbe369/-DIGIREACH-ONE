import { DomainEvent } from '../../domain/events/rules.events';

export interface IRuleEventPublisher {
  publish(event: DomainEvent): Promise<void>;
}

import { IRuleEventPublisher } from '../../application/interfaces/i-rule-event.publisher';
import { DomainEvent } from '../../domain/events/rules.events';

export class DummyRuleEventPublisher implements IRuleEventPublisher {
  async publish(_event: DomainEvent): Promise<void> {}
}

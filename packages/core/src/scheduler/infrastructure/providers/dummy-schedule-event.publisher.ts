import { IScheduleEventPublisher } from '../../application/interfaces/i-schedule-event.publisher';
import { DomainEvent } from '../../domain/events/scheduler.events';

export class DummyScheduleEventPublisher implements IScheduleEventPublisher {
  async publish(_event: DomainEvent): Promise<void> {}
}

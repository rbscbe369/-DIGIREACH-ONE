import { DomainEvent } from '../../domain/events/scheduler.events';

export interface IScheduleEventPublisher {
  publish(event: DomainEvent): Promise<void>;
}

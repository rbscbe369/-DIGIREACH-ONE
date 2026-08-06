import { IScheduleEventPublisher } from '../interfaces/i-schedule-event.publisher';
import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';
import { ScheduleRegistration } from '../../domain/entities/schedule-registration.entity';
import { ScheduleTriggeredEvent } from '../../domain/events/scheduler.events';
import { ScheduleContext } from '../../domain/value-objects/schedule-context.vo';

export class ExecutionDispatcher {
  constructor(private readonly eventPublisher: IScheduleEventPublisher) {}

  async dispatch(
    definition: ScheduleDefinition,
    registration: ScheduleRegistration,
    context: ScheduleContext,
  ): Promise<void> {
    const event = new ScheduleTriggeredEvent(
      registration.id,
      definition.payloadTemplate,
      context.correlationId,
    );
    await this.eventPublisher.publish(event);
  }
}

import { ISchedulerProvider } from '../interfaces/i-scheduler-provider';
import { IScheduleRepository } from '../interfaces/i-schedule-repository';
import { IScheduleEventPublisher } from '../interfaces/i-schedule-event.publisher';
import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';
import { ScheduleRegistration } from '../../domain/entities/schedule-registration.entity';
import { ScheduleStatus } from '../../domain/value-objects/schedule-status.vo';
import {
  ScheduleRegisteredEvent,
  ScheduleCreatedEvent,
} from '../../domain/events/scheduler.events';

export class CreateScheduleUseCase {
  constructor(
    private readonly provider: ISchedulerProvider,
    private readonly repo: IScheduleRepository,
    private readonly publisher: IScheduleEventPublisher,
  ) {}

  async execute(definition: ScheduleDefinition): Promise<ScheduleRegistration> {
    await this.repo.saveDefinition(definition);
    await this.publisher.publish(new ScheduleCreatedEvent(definition.id));

    // Abstract provider call (could be Cron, Quartz, AWS)
    const providerJobId = await this.provider.register(definition);

    const registration = new ScheduleRegistration(
      Date.now().toString(),
      definition.id,
      providerJobId,
      ScheduleStatus.ACTIVE,
      new Date(),
    );

    await this.repo.saveRegistration(registration);
    await this.publisher.publish(new ScheduleRegisteredEvent(registration.id));

    return registration;
  }
}

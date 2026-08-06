import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';

export interface ISchedulerProvider {
  register(definition: ScheduleDefinition): Promise<string>; // Returns providerJobId
  cancel(providerJobId: string): Promise<void>;
  pause(providerJobId: string): Promise<void>;
  resume(providerJobId: string): Promise<void>;
}

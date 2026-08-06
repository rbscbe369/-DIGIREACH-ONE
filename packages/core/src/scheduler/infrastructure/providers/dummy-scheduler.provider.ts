import { ISchedulerProvider } from '../../application/interfaces/i-scheduler-provider';
import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';

export class DummySchedulerProvider implements ISchedulerProvider {
  async register(_definition: ScheduleDefinition): Promise<string> {
    return `dummy-provider-job-${Date.now()}`;
  }

  async cancel(_providerJobId: string): Promise<void> {}
  async pause(_providerJobId: string): Promise<void> {}
  async resume(_providerJobId: string): Promise<void> {}
}

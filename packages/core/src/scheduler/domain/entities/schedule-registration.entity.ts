import { ScheduleStatus } from '../value-objects/schedule-status.vo';

export class ScheduleRegistration {
  constructor(
    public readonly id: string,
    public readonly definitionId: string,
    public readonly providerJobId: string | null, // ID given by the external provider
    public readonly status: ScheduleStatus,
    public readonly registeredAt: Date,
    public readonly nextRunAt: Date | null = null,
  ) {}
}

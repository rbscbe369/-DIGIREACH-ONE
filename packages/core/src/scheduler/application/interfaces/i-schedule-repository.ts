import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';
import { ScheduleRegistration } from '../../domain/entities/schedule-registration.entity';

export interface IScheduleRepository {
  findDefinitionById(id: string): Promise<ScheduleDefinition | null>;
  saveDefinition(definition: ScheduleDefinition): Promise<void>;

  findRegistrationById(id: string): Promise<ScheduleRegistration | null>;
  saveRegistration(registration: ScheduleRegistration): Promise<void>;
}

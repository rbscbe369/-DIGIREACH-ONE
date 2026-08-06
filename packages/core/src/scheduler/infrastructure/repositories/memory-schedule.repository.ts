import { IScheduleRepository } from '../../application/interfaces/i-schedule-repository';
import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';
import { ScheduleRegistration } from '../../domain/entities/schedule-registration.entity';

export class MemoryScheduleRepository implements IScheduleRepository {
  private definitions = new Map<string, ScheduleDefinition>();
  private registrations = new Map<string, ScheduleRegistration>();

  async findDefinitionById(id: string): Promise<ScheduleDefinition | null> {
    return this.definitions.get(id) || null;
  }

  async saveDefinition(definition: ScheduleDefinition): Promise<void> {
    this.definitions.set(definition.id, definition);
  }

  async findRegistrationById(id: string): Promise<ScheduleRegistration | null> {
    return this.registrations.get(id) || null;
  }

  async saveRegistration(registration: ScheduleRegistration): Promise<void> {
    this.registrations.set(registration.id, registration);
  }
}

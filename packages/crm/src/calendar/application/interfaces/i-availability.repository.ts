import { Availability } from '../../domain/entities/availability.entity';
export interface IAvailabilityRepository {
  findByEntityId(entityId: string, startTime: Date, endTime: Date): Promise<Availability[]>;
  save(availability: Availability): Promise<void>;
}

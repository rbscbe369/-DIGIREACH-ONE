import { IAvailabilityRepository } from '../../application/interfaces/i-availability.repository';
import { Availability } from '../../domain/entities/availability.entity';
export class MemoryAvailabilityRepository implements IAvailabilityRepository {
  private availabilities: Availability[] = [];
  async findByEntityId(
    entityId: string,
    _startTime: Date,
    _endTime: Date,
  ): Promise<Availability[]> {
    return this.availabilities.filter((a) => a.entityId === entityId);
  }
  async save(availability: Availability): Promise<void> {
    this.availabilities.push(availability);
  }
}

import { IAvailabilityRepository } from '../interfaces/i-availability.repository';
import { Availability } from '../../domain/entities/availability.entity';
export class AvailabilityService {
  constructor(private readonly repo: IAvailabilityRepository) {}
  async saveAvailability(availability: Availability): Promise<void> {
    await this.repo.save(availability);
  }
}

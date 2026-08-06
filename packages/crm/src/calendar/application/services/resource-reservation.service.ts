import { ResourceReservation } from '../../domain/entities/resource-reservation.entity';
export class ResourceReservationService {
  reserve(_resourceId: string, _meetingId: string): ResourceReservation {
    return new ResourceReservation('res-1', _resourceId, _meetingId, new Date(), new Date());
  }
}

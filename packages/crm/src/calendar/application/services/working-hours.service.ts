import { Calendar } from '../../domain/entities/calendar.entity';
import { WorkingHours } from '../../domain/value-objects/working-hours.vo';
export class WorkingHoursService {
  setWorkingHours(calendar: Calendar, hours: WorkingHours): void {
    calendar.workingHours = hours;
  }
}

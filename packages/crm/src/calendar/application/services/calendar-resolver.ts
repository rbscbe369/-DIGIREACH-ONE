import { Calendar } from '../../domain/entities/calendar.entity';
export class CalendarResolver {
  static resolve(data: unknown): Calendar {
    return data as Calendar;
  }
}

import { Calendar } from '../../domain/entities/calendar.entity';
export interface ICalendarRepository {
  findById(id: string): Promise<Calendar | null>;
  save(calendar: Calendar): Promise<void>;
  delete(id: string): Promise<void>;
}

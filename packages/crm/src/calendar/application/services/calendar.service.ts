import { ICalendarRepository } from '../interfaces/i-calendar.repository';
import { Calendar } from '../../domain/entities/calendar.entity';
export class CalendarService {
  constructor(private readonly repo: ICalendarRepository) {}
  async saveCalendar(calendar: Calendar): Promise<void> {
    await this.repo.save(calendar);
  }
  async getCalendar(id: string): Promise<Calendar | null> {
    return this.repo.findById(id);
  }
  async deleteCalendar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

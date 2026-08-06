import { ICalendarRepository } from '../../application/interfaces/i-calendar.repository';
import { Calendar } from '../../domain/entities/calendar.entity';
export class MemoryCalendarRepository implements ICalendarRepository {
  private calendars = new Map<string, Calendar>();
  async findById(id: string): Promise<Calendar | null> {
    return this.calendars.get(id) || null;
  }
  async save(calendar: Calendar): Promise<void> {
    this.calendars.set(calendar.id, calendar);
  }
  async delete(id: string): Promise<void> {
    this.calendars.delete(id);
  }
}

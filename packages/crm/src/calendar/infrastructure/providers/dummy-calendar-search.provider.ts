import { ICalendarSearchProvider } from '../../application/interfaces/i-calendar-search.provider';
import { Calendar } from '../../domain/entities/calendar.entity';
export class DummyCalendarSearchProvider implements ICalendarSearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Calendar[]> {
    return [];
  }
}

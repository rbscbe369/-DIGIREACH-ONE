import { Calendar } from '../../domain/entities/calendar.entity';
export interface ICalendarSearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Calendar[]>;
}

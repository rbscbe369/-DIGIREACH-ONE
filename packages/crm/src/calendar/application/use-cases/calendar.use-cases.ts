import { CalendarService } from '../services/calendar.service';
import { Calendar } from '../../domain/entities/calendar.entity';
import { ICalendarSearchProvider } from '../interfaces/i-calendar-search.provider';

export class CreateCalendarUseCase {
  constructor(private readonly service: CalendarService) {}
  async execute(calendar: Calendar): Promise<void> {
    await this.service.saveCalendar(calendar);
  }
}

export class UpdateCalendarUseCase {
  constructor(private readonly service: CalendarService) {}
  async execute(calendar: Calendar): Promise<void> {
    await this.service.saveCalendar(calendar);
  }
}

export class DeleteCalendarUseCase {
  constructor(private readonly service: CalendarService) {}
  async execute(id: string): Promise<void> {
    await this.service.deleteCalendar(id);
  }
}

export class SearchCalendarUseCase {
  constructor(private readonly searchProvider: ICalendarSearchProvider) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Calendar[]> {
    return this.searchProvider.search(query, metadata);
  }
}

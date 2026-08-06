import { ICalendarSyncProvider } from '../interfaces/i-calendar-sync.provider';
export class CalendarSyncService {
  constructor(private readonly syncProvider: ICalendarSyncProvider) {}
  async sync(calendarId: string): Promise<void> {
    await this.syncProvider.sync(calendarId);
  }
}

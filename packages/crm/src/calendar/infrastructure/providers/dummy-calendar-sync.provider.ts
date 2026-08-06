import { ICalendarSyncProvider } from '../../application/interfaces/i-calendar-sync.provider';
export class DummyCalendarSyncProvider implements ICalendarSyncProvider {
  async sync(_calendarId: string): Promise<void> {
    // Dummy implementation
  }
}

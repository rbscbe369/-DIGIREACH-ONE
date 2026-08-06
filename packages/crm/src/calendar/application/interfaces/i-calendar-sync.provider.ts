export interface ICalendarSyncProvider {
  sync(calendarId: string): Promise<void>;
}

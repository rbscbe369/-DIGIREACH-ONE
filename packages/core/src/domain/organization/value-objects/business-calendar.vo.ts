export class BusinessCalendar {
  constructor(
    public readonly fiscalYearStartMonth: number,
    public readonly weekStartDay: number,
    public readonly holidayCalendarId: string,
  ) {}
}

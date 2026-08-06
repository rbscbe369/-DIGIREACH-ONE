export class DueDate {
  constructor(
    public readonly absoluteDate: Date | null,
    public readonly offsetMs: number | null,
    public readonly businessCalendarId: string | null,
  ) {}
}

export class ScheduleCalendar {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly timeZoneId: string,
    public readonly workingDays: number[], // 0 = Sunday, 1 = Monday
    public readonly holidays: Date[], // specific dates marked as non-working
  ) {}
}

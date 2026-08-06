export class ScheduleWindow {
  constructor(
    public readonly start: Date,
    public readonly end: Date | null,
    public readonly maximumDelayMs: number | null,
    public readonly gracePeriodMs: number | null,
  ) {}
}

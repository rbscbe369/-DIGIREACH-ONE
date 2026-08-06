export class TimeZonePolicy {
  constructor(
    public readonly timeZoneId: string, // e.g. "America/New_York", "UTC"
    public readonly applyDaylightSavings: boolean = true,
  ) {}
}

export class RecurrenceRule {
  constructor(
    public readonly frequency:
      'SECONDLY' | 'MINUTELY' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
    public readonly interval: number = 1,
    public readonly byDay: string[] = [], // e.g., ['MO', 'WE', 'FR']
    public readonly byMonthDay: number[] = [],
    public readonly byMonth: number[] = [],
    public readonly count: number | null = null,
    public readonly until: Date | null = null,
  ) {}
}

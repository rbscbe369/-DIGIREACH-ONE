export class RecurrenceRule {
  constructor(
    public readonly type:
      'ONE_TIME' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'BUSINESS_DAYS' | 'CUSTOM',
    public readonly customRRule: string | null,
    public readonly endDate: Date | null,
    public readonly occurrenceLimit: number | null,
    public readonly exceptionDates: Date[],
  ) {}
}

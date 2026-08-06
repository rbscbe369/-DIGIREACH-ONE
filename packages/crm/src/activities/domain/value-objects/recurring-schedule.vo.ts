export type RecurrenceInterval =
  'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'CUSTOM' | 'BUSINESS_DAYS';

export class RecurringSchedule {
  constructor(
    public readonly interval: RecurrenceInterval,
    public readonly endDate: Date | null,
    public readonly occurrenceLimit: number | null,
  ) {}
}

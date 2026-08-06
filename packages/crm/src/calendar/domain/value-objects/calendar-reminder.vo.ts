export class CalendarReminder {
  constructor(
    public readonly minutesBefore: number,
    public readonly method: 'EMAIL' | 'POPUP' | 'SMS',
  ) {}
}

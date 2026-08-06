export enum HolidayShiftAction {
  SKIP = 'SKIP',
  PREVIOUS_BUSINESS_DAY = 'PREVIOUS_BUSINESS_DAY',
  NEXT_BUSINESS_DAY = 'NEXT_BUSINESS_DAY',
  EXECUTE_ANYWAY = 'EXECUTE_ANYWAY',
}

export class HolidayPolicy {
  constructor(
    public readonly businessCalendarId: string,
    public readonly shiftAction: HolidayShiftAction,
  ) {}
}

import { ScheduleCalendar } from '../../domain/entities/schedule-calendar.entity';
import { HolidayPolicy, HolidayShiftAction } from '../../domain/value-objects/holiday-policy.vo';

export class BusinessCalendarResolver {
  static resolveNextValidDate(
    targetDate: Date,
    calendar: ScheduleCalendar,
    policy: HolidayPolicy,
  ): Date | null {
    const isHoliday = calendar.holidays.some((h) => h.toDateString() === targetDate.toDateString());

    if (!isHoliday) return targetDate;

    if (policy.shiftAction === HolidayShiftAction.EXECUTE_ANYWAY) {
      return targetDate;
    }

    if (policy.shiftAction === HolidayShiftAction.SKIP) {
      return null; // Skip this occurrence completely
    }

    // Next/Previous logic would go here. For scaffolding, we return null to simulate skip.
    return null;
  }
}

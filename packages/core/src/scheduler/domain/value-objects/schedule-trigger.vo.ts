import { RecurrenceRule } from './recurrence-rule.vo';
import { ScheduleWindow } from './schedule-window.vo';
import { TimeZonePolicy } from './time-zone-policy.vo';
import { HolidayPolicy } from './holiday-policy.vo';

export class ScheduleTrigger {
  constructor(
    public readonly startAt: Date,
    public readonly recurrence: RecurrenceRule | null = null,
    public readonly timeZonePolicy: TimeZonePolicy | null = null,
    public readonly holidayPolicy: HolidayPolicy | null = null,
    public readonly window: ScheduleWindow | null = null,
  ) {}
}

import { Activity } from '../../domain/entities/activity.entity';
import { RecurringSchedule } from '../../domain/value-objects/recurring-schedule.vo';

export class RecurringActivityService {
  setRecurrence(activity: Activity, schedule: RecurringSchedule): void {
    activity.recurrence = schedule;
  }
}

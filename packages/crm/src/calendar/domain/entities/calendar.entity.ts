import { CalendarIdentity } from '../value-objects/calendar-identity.vo';
import { CalendarPermission } from '../value-objects/calendar-permission.vo';
import { CalendarShare } from '../value-objects/calendar-share.vo';
import { WorkingHours } from '../value-objects/working-hours.vo';
import { BusinessHours } from '../value-objects/business-hours.vo';
import { TimeZonePolicy } from '../value-objects/time-zone-policy.vo';
import { CalendarView } from '../value-objects/calendar-view.vo';
import { CalendarEvent } from './calendar-event.entity';

export class Calendar {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: CalendarIdentity,
    public permissions: CalendarPermission[],
    public shares: CalendarShare[],
    public workingHours: WorkingHours | null,
    public businessHours: BusinessHours | null,
    public timeZone: TimeZonePolicy,
    public viewPreference: CalendarView,
    public events: CalendarEvent[] = [],
  ) {}
}

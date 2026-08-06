import { ActivityIdentity } from '../value-objects/activity-identity.vo';
import { ActivityType } from '../value-objects/activity-type.vo';
import { ActivityCategory } from '../value-objects/activity-category.vo';
import { ActivityStatus } from '../value-objects/activity-status.vo';
import { ActivityPriority } from '../value-objects/activity-priority.vo';
import { ActivityAssignment } from '../value-objects/activity-assignment.vo';
import { ActivityParticipant } from '../value-objects/activity-participant.vo';
import { ActivityDuration } from '../value-objects/activity-duration.vo';
import { ActivitySLA } from '../value-objects/activity-sla.vo';
import { Checklist } from '../value-objects/checklist.vo';
import { RecurringSchedule } from '../value-objects/recurring-schedule.vo';
import { ActivityCommunication } from '../value-objects/activity-communication.vo';
import { ActivityAttachmentReference } from '../value-objects/activity-attachment-reference.vo';
import { ActivityReference } from '../value-objects/activity-reference.vo';
import { ActivityTimeline } from './activity-timeline.entity';
import { ActivityStatistics } from '../value-objects/activity-statistics.vo';
import { ActivityPreference } from '../value-objects/activity-preference.vo';
import { ActivityAIProfile } from '../value-objects/activity-ai-profile.vo';
import { Task } from './task.entity';
import { Reminder } from './reminder.entity';

export class Activity {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: ActivityIdentity,
    public readonly type: ActivityType,
    public readonly category: ActivityCategory,
    public status: ActivityStatus,
    public priority: ActivityPriority,
    public assignment: ActivityAssignment,
    public participants: ActivityParticipant[],
    public duration: ActivityDuration,
    public sla: ActivitySLA,
    public checklist: Checklist,
    public reminders: Reminder[],
    public recurrence: RecurringSchedule | null,
    public communications: ActivityCommunication[],
    public attachments: ActivityAttachmentReference[],
    public references: ActivityReference[],
    public timeline: ActivityTimeline,
    public statistics: ActivityStatistics,
    public preferences: ActivityPreference,
    public aiProfile: ActivityAIProfile,
    public taskDetails: Task | null = null,
  ) {}

  public complete(): void {
    this.status = new ActivityStatus('COMPLETED', new Date());
  }

  public cancel(): void {
    this.status = new ActivityStatus('CANCELLED', new Date());
  }
}

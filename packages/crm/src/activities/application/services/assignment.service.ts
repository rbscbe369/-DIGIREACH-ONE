import { Activity } from '../../domain/entities/activity.entity';
import { ActivityAssignment } from '../../domain/value-objects/activity-assignment.vo';

export class AssignmentService {
  assign(activity: Activity, assignment: ActivityAssignment): void {
    activity.assignment = assignment;
  }
}

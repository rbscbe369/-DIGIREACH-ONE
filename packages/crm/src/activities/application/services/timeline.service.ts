import {
  ActivityTimeline,
  ActivityTimelineEvent,
} from '../../domain/entities/activity-timeline.entity';

export class TimelineService {
  addEvent(timeline: ActivityTimeline, event: ActivityTimelineEvent): void {
    timeline.events.push(event);
  }
}

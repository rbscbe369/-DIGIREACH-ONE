import { LeadTimeline, LeadTimelineEvent } from '../../domain/entities/lead-timeline.entity';

export class LeadTimelineService {
  async addEvent(timeline: LeadTimeline, event: LeadTimelineEvent): Promise<void> {
    timeline.events.push(event);
  }
}

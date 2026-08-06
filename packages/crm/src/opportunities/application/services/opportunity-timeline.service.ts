import {
  OpportunityTimeline,
  OpportunityTimelineEvent,
} from '../../domain/entities/opportunity-timeline.entity';

export class OpportunityTimelineService {
  async addEvent(timeline: OpportunityTimeline, event: OpportunityTimelineEvent): Promise<void> {
    timeline.events.push(event);
  }
}

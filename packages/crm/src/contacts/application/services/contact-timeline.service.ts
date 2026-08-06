import {
  ContactTimeline,
  ContactTimelineEvent,
} from '../../domain/entities/contact-timeline.entity';

export class ContactTimelineService {
  async addEvent(timeline: ContactTimeline, event: ContactTimelineEvent): Promise<void> {
    timeline.events.push(event);
  }
}

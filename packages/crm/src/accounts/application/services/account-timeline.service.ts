import {
  AccountTimeline,
  AccountTimelineEvent,
} from '../../domain/entities/account-timeline.entity';

export class AccountTimelineService {
  async addEvent(timeline: AccountTimeline, event: AccountTimelineEvent): Promise<void> {
    timeline.events.push(event);
  }
}

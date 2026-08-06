import { ActivityService } from '../services/activity.service';
import { Activity } from '../../domain/entities/activity.entity';
import { ActivityTimeline } from '../../domain/entities/activity-timeline.entity';
import { IActivitySearchProvider } from '../interfaces/i-activity-search.provider';

export class CreateActivityUseCase {
  constructor(private readonly service: ActivityService) {}
  async execute(activity: Activity): Promise<void> {
    await this.service.saveActivity(activity);
  }
}

export class UpdateActivityUseCase {
  constructor(private readonly service: ActivityService) {}
  async execute(activity: Activity): Promise<void> {
    await this.service.saveActivity(activity);
  }
}

export class CompleteActivityUseCase {
  constructor(private readonly service: ActivityService) {}
  async execute(activityId: string): Promise<void> {
    const activity = await this.service.getActivity(activityId);
    if (activity) {
      activity.complete();
      await this.service.saveActivity(activity);
    }
  }
}

export class DeleteActivityUseCase {
  constructor(private readonly service: ActivityService) {}
  async execute(id: string): Promise<void> {
    await this.service.deleteActivity(id);
  }
}

export class SearchActivitiesUseCase {
  constructor(private readonly provider: IActivitySearchProvider) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Activity[]> {
    return this.provider.search(query, metadata);
  }
}

export class GetActivityTimelineUseCase {
  constructor(private readonly service: ActivityService) {}
  async execute(id: string): Promise<ActivityTimeline | null> {
    const activity = await this.service.getActivity(id);
    return activity ? activity.timeline : null;
  }
}

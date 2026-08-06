import { Activity } from '../../domain/entities/activity.entity';

export interface IActivitySearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Activity[]>;
}

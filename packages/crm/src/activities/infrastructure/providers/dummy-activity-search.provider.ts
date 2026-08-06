import { IActivitySearchProvider } from '../../application/interfaces/i-activity-search.provider';
import { Activity } from '../../domain/entities/activity.entity';

export class DummyActivitySearchProvider implements IActivitySearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Activity[]> {
    return [];
  }
}

import { IActivityRepository } from '../interfaces/i-activity.repository';
import { Activity } from '../../domain/entities/activity.entity';

export class ActivityService {
  constructor(private readonly repo: IActivityRepository) {}

  async getActivity(id: string): Promise<Activity | null> {
    return this.repo.findById(id);
  }

  async saveActivity(activity: Activity): Promise<void> {
    await this.repo.save(activity);
  }

  async deleteActivity(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

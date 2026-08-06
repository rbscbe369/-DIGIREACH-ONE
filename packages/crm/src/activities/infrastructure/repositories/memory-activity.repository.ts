import { IActivityRepository } from '../../application/interfaces/i-activity.repository';
import { Activity } from '../../domain/entities/activity.entity';

export class MemoryActivityRepository implements IActivityRepository {
  private activities = new Map<string, Activity>();

  async findById(id: string): Promise<Activity | null> {
    return this.activities.get(id) || null;
  }

  async save(activity: Activity): Promise<void> {
    this.activities.set(activity.id, activity);
  }

  async delete(id: string): Promise<void> {
    this.activities.delete(id);
  }
}

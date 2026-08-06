import { Activity } from '../../domain/entities/activity.entity';

export interface IActivityRepository {
  findById(id: string): Promise<Activity | null>;
  save(activity: Activity): Promise<void>;
  delete(id: string): Promise<void>;
}

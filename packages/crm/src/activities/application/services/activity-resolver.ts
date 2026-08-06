import { Activity } from '../../domain/entities/activity.entity';

export class ActivityResolver {
  static resolve(data: unknown): Activity {
    return data as Activity;
  }
}

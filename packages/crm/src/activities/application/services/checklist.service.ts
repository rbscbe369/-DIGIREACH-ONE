import { Activity } from '../../domain/entities/activity.entity';
import { ChecklistItem } from '../../domain/value-objects/checklist.vo';

export class ChecklistService {
  addItem(activity: Activity, item: ChecklistItem): void {
    activity.checklist.items.push(item);
  }
}

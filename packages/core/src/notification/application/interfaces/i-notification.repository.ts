import { Notification } from '../../domain/entities/notification.entity';
import { NotificationPreference } from '../../domain/value-objects/notification-preference.vo';

export interface INotificationRepository {
  save(notification: Notification): Promise<void>;
  findById(id: string): Promise<Notification | null>;
  getPreference(userId: string): Promise<NotificationPreference | null>;
}

import { INotificationRepository } from '../../application/interfaces/i-notification.repository';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationPreference } from '../../domain/value-objects/notification-preference.vo';

export class MemoryNotificationRepository implements INotificationRepository {
  private notifications = new Map<string, Notification>();
  private preferences = new Map<string, NotificationPreference>();

  async save(notification: Notification): Promise<void> {
    this.notifications.set(notification.id, notification);
  }

  async findById(id: string): Promise<Notification | null> {
    return this.notifications.get(id) || null;
  }

  async getPreference(userId: string): Promise<NotificationPreference | null> {
    return this.preferences.get(userId) || null;
  }
}

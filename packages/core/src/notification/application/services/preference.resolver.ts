import { INotificationRepository } from '../interfaces/i-notification.repository';
import { NotificationCategory } from '../../domain/value-objects/notification-category.vo';
import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';
import { NotificationPriority } from '../../domain/value-objects/notification-priority.vo';

export class PreferenceResolver {
  constructor(private readonly repo: INotificationRepository) {}

  async resolveAllowedChannels(
    userId: string,
    category: NotificationCategory,
    priority: NotificationPriority,
    requestedChannels: NotificationChannel[],
  ): Promise<NotificationChannel[]> {
    if (priority === NotificationPriority.CRITICAL) {
      return requestedChannels; // CRITICAL overrides all preferences
    }

    const pref = await this.repo.getPreference(userId);
    if (!pref) return requestedChannels;

    if (pref.disabledCategories.includes(category)) return [];

    let allowed = requestedChannels.filter((c) => !pref.disabledChannels.includes(c));

    const overrides = pref.channelOverrides.get(category);
    if (overrides) {
      allowed = overrides;
    }

    return allowed;
  }
}

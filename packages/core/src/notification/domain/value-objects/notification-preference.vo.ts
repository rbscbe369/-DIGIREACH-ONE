import { NotificationCategory } from './notification-category.vo';
import { NotificationChannel } from './notification-channel.vo';

export class NotificationPreference {
  constructor(
    public readonly userId: string,
    public readonly disabledCategories: NotificationCategory[] = [],
    public readonly disabledChannels: NotificationChannel[] = [],
    public readonly channelOverrides: Map<NotificationCategory, NotificationChannel[]> = new Map(),
  ) {}
}

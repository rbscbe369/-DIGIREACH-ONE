import { NotificationCategory } from '../value-objects/notification-category.vo';
import { NotificationPriority } from '../value-objects/notification-priority.vo';
import { NotificationRecipient } from '../value-objects/notification-recipient.vo';
import { DeliveryStatus } from '../value-objects/delivery-status.vo';

export class Notification {
  constructor(
    public readonly id: string,
    public readonly category: NotificationCategory,
    public readonly priority: NotificationPriority,
    public readonly recipient: NotificationRecipient,
    public readonly templateId: string,
    public readonly payloadData: Record<string, unknown>,
    public readonly status: DeliveryStatus,
    public readonly createdAt: Date,
    public readonly scheduledFor: Date | null = null,
  ) {}
}

import { z } from 'zod';
import { NotificationCategory } from '../../domain/value-objects/notification-category.vo';
import { NotificationPriority } from '../../domain/value-objects/notification-priority.vo';
import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';

export const SendNotificationDto = z.object({
  id: z.string(),
  category: z.nativeEnum(NotificationCategory),
  priority: z.nativeEnum(NotificationPriority),
  recipientId: z.string(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  pushToken: z.string().optional(),
  webhookUrl: z.string().optional(),
  templateId: z.string(),
  templateRawBody: z.string(),
  payloadData: z.record(z.unknown()),
  requestedChannels: z.array(z.nativeEnum(NotificationChannel)),
});

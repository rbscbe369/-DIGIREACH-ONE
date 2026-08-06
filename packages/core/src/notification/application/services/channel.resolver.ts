import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';
import { NotificationRecipient } from '../../domain/value-objects/notification-recipient.vo';

export class ChannelResolver {
  resolveViableChannels(
    recipient: NotificationRecipient,
    allowedChannels: NotificationChannel[],
  ): NotificationChannel[] {
    const viable: NotificationChannel[] = [];
    if (recipient.email && allowedChannels.includes(NotificationChannel.EMAIL))
      viable.push(NotificationChannel.EMAIL);
    if (recipient.phoneNumber && allowedChannels.includes(NotificationChannel.SMS))
      viable.push(NotificationChannel.SMS);
    if (recipient.phoneNumber && allowedChannels.includes(NotificationChannel.WHATSAPP))
      viable.push(NotificationChannel.WHATSAPP);
    if (recipient.pushToken && allowedChannels.includes(NotificationChannel.PUSH))
      viable.push(NotificationChannel.PUSH);
    if (recipient.webhookUrl && allowedChannels.includes(NotificationChannel.WEBHOOK))
      viable.push(NotificationChannel.WEBHOOK);

    // In-App always available if requested and allowed
    if (allowedChannels.includes(NotificationChannel.IN_APP))
      viable.push(NotificationChannel.IN_APP);

    return viable;
  }
}

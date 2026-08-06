import {
  IEmailProvider,
  ISMSProvider,
  IWhatsAppProvider,
  IPushProvider,
  IWebhookProvider,
} from '../interfaces/i-notification-providers';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';

export class NotificationDispatcher {
  constructor(
    private readonly emailProvider: IEmailProvider,
    private readonly smsProvider: ISMSProvider,
    private readonly whatsAppProvider: IWhatsAppProvider,
    private readonly pushProvider: IPushProvider,
    private readonly webhookProvider: IWebhookProvider,
  ) {}

  async dispatch(
    notification: Notification,
    channels: NotificationChannel[],
    renderedBody: string,
  ): Promise<void> {
    const promises: Promise<boolean>[] = [];

    for (const channel of channels) {
      switch (channel) {
        case NotificationChannel.EMAIL:
          promises.push(
            this.emailProvider.send(notification.recipient, 'Notification', renderedBody),
          );
          break;
        case NotificationChannel.SMS:
          promises.push(this.smsProvider.send(notification.recipient, renderedBody));
          break;
        case NotificationChannel.WHATSAPP:
          promises.push(
            this.whatsAppProvider.send(
              notification.recipient,
              notification.templateId,
              notification.payloadData,
            ),
          );
          break;
        case NotificationChannel.PUSH:
          promises.push(
            this.pushProvider.send(
              notification.recipient,
              'Notification',
              renderedBody,
              notification.payloadData,
            ),
          );
          break;
        case NotificationChannel.WEBHOOK:
          promises.push(
            this.webhookProvider.send(notification.recipient, notification.payloadData),
          );
          break;
      }
    }

    await Promise.allSettled(promises);
  }
}

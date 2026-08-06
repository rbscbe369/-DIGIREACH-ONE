import { SendNotificationUseCase } from '../use-cases/notification.use-cases';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';

export class NotificationService {
  constructor(private readonly sendUseCase: SendNotificationUseCase) {}

  async send(
    notification: Notification,
    templateBody: string,
    defaultChannels: NotificationChannel[],
  ): Promise<void> {
    await this.sendUseCase.execute(notification, templateBody, defaultChannels);
  }
}

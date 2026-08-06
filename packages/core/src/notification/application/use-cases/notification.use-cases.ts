import { INotificationRepository } from '../interfaces/i-notification.repository';
import { IAuditPublisher } from '../interfaces/i-audit-publisher';
import { NotificationDispatcher } from '../services/notification.dispatcher';
import { PreferenceResolver } from '../services/preference.resolver';
import { ChannelResolver } from '../services/channel.resolver';
import { TemplateResolver } from '../services/template.resolver';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationTemplate } from '../../domain/entities/notification-template.entity';
import { NotificationChannel } from '../../domain/value-objects/notification-channel.vo';

export class SendNotificationUseCase {
  constructor(
    private readonly repo: INotificationRepository,
    private readonly dispatcher: NotificationDispatcher,
    private readonly preferenceResolver: PreferenceResolver,
    private readonly channelResolver: ChannelResolver,
    private readonly templateResolver: TemplateResolver,
    private readonly auditPublisher: IAuditPublisher,
  ) {}

  async execute(
    notification: Notification,
    templateRawBody: string,
    requestedChannels: NotificationChannel[],
  ): Promise<void> {
    const allowedChannels = await this.preferenceResolver.resolveAllowedChannels(
      notification.recipient.recipientId,
      notification.category,
      notification.priority,
      requestedChannels,
    );

    const viableChannels = this.channelResolver.resolveViableChannels(
      notification.recipient,
      allowedChannels,
    );

    if (viableChannels.length === 0) {
      await this.auditPublisher.publishNotificationResult(notification.id, 'SKIPPED', {
        reason: 'No viable or allowed channels',
      });
      return;
    }

    const template = new NotificationTemplate(
      notification.templateId,
      'Temp',
      templateRawBody,
      null,
      '1.0',
    );
    const rendered = await this.templateResolver.resolveAndRender(
      template,
      notification.payloadData,
    );

    await this.dispatcher.dispatch(notification, viableChannels, rendered);

    await this.repo.save(notification);
    await this.auditPublisher.publishNotificationResult(notification.id, 'DISPATCHED', {
      channels: viableChannels,
    });
  }
}

export class ScheduleNotificationUseCase {
  async execute(): Promise<void> {
    // Placeholder
  }
}

export class CancelNotificationUseCase {
  async execute(): Promise<void> {
    // Placeholder
  }
}

export class RetryNotificationUseCase {
  async execute(): Promise<void> {
    // Placeholder
  }
}

import {
  IEmailProvider,
  ISMSProvider,
  IWhatsAppProvider,
  IPushProvider,
  IWebhookProvider,
} from '../../application/interfaces/i-notification-providers';
import { IAuditPublisher } from '../../application/interfaces/i-audit-publisher';
import { NotificationRecipient } from '../../domain/value-objects/notification-recipient.vo';

export class DummyEmailProvider implements IEmailProvider {
  async send(
    _recipient: NotificationRecipient,
    _subject: string,
    _htmlBody: string,
  ): Promise<boolean> {
    return true;
  }
}

export class DummySMSProvider implements ISMSProvider {
  async send(_recipient: NotificationRecipient, _textBody: string): Promise<boolean> {
    return true;
  }
}

export class DummyWhatsAppProvider implements IWhatsAppProvider {
  async send(
    _recipient: NotificationRecipient,
    _templateId: string,
    _payload: Record<string, unknown>,
  ): Promise<boolean> {
    return true;
  }
}

export class DummyPushProvider implements IPushProvider {
  async send(
    _recipient: NotificationRecipient,
    _title: string,
    _body: string,
    _data: Record<string, unknown>,
  ): Promise<boolean> {
    return true;
  }
}

export class DummyWebhookProvider implements IWebhookProvider {
  async send(
    _recipient: NotificationRecipient,
    _payload: Record<string, unknown>,
  ): Promise<boolean> {
    return true;
  }
}

export class DummyAuditPublisher implements IAuditPublisher {
  async publishNotificationResult(
    _notificationId: string,
    _status: string,
    _details: Record<string, unknown>,
  ): Promise<void> {}
}

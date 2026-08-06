import { NotificationRecipient } from '../../domain/value-objects/notification-recipient.vo';

export interface IEmailProvider {
  send(recipient: NotificationRecipient, subject: string, htmlBody: string): Promise<boolean>;
}

export interface ISMSProvider {
  send(recipient: NotificationRecipient, textBody: string): Promise<boolean>;
}

export interface IWhatsAppProvider {
  send(
    recipient: NotificationRecipient,
    templateId: string,
    payload: Record<string, unknown>,
  ): Promise<boolean>;
}

export interface IPushProvider {
  send(
    recipient: NotificationRecipient,
    title: string,
    body: string,
    data: Record<string, unknown>,
  ): Promise<boolean>;
}

export interface IWebhookProvider {
  send(recipient: NotificationRecipient, payload: Record<string, unknown>): Promise<boolean>;
}

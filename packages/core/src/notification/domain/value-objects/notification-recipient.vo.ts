export class NotificationRecipient {
  constructor(
    public readonly recipientId: string,
    public readonly email: string | null = null,
    public readonly phoneNumber: string | null = null,
    public readonly pushToken: string | null = null,
    public readonly webhookUrl: string | null = null,
  ) {}
}

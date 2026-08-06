import { NotificationChannel } from './notification-channel.vo';

export class ChannelCapability {
  constructor(
    public readonly channel: NotificationChannel,
    public readonly supportsRichText: boolean,
    public readonly supportsAttachments: boolean,
    public readonly maxPayloadSizeBytes: number,
    public readonly requiresOptIn: boolean,
  ) {}
}

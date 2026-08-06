export class ContactCommunication {
  constructor(
    public readonly communicationId: string,
    public readonly channel:
      | 'PHONE'
      | 'EMAIL'
      | 'SMS'
      | 'WHATSAPP'
      | 'TELEGRAM'
      | 'SIGNAL'
      | 'TEAMS'
      | 'SLACK'
      | 'ZOOM'
      | 'GOOGLE_MEET',
    public readonly direction: 'INBOUND' | 'OUTBOUND',
    public readonly occurredAt: Date,
    public readonly summary: string | null,
  ) {}
}

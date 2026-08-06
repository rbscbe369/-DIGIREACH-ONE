export class LeadCommunication {
  constructor(
    public readonly communicationId: string,
    public readonly channel: 'PHONE' | 'EMAIL' | 'SMS' | 'WHATSAPP' | 'MEETING' | 'CHAT' | 'VIDEO',
    public readonly direction: 'INBOUND' | 'OUTBOUND',
    public readonly occurredAt: Date,
    public readonly summary: string | null,
  ) {}
}

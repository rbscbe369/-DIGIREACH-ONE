export class LeadPreferences {
  constructor(
    public readonly preferredContactMethod:
      'PHONE' | 'EMAIL' | 'SMS' | 'WHATSAPP' | 'MEETING' | 'CHAT' | 'VIDEO' | null,
    public readonly bestTimeToContact: string | null,
    public readonly language: string | null,
  ) {}
}

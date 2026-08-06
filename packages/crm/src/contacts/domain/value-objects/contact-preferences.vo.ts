export class ContactPreferences {
  constructor(
    public readonly preferredCommunication:
      | 'PHONE'
      | 'EMAIL'
      | 'SMS'
      | 'WHATSAPP'
      | 'TELEGRAM'
      | 'SIGNAL'
      | 'TEAMS'
      | 'SLACK'
      | 'ZOOM'
      | 'GOOGLE_MEET'
      | null,
    public readonly preferredLanguage: string | null,
    public readonly timeZone: string | null,
  ) {}
}

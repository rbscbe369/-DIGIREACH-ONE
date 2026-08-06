export class LeadSource {
  constructor(
    public readonly channel:
      | 'WEBSITE'
      | 'LANDING_PAGE'
      | 'FACEBOOK'
      | 'INSTAGRAM'
      | 'GOOGLE_ADS'
      | 'LINKEDIN'
      | 'WHATSAPP'
      | 'REFERRAL'
      | 'EMAIL'
      | 'PHONE'
      | 'WALK_IN'
      | 'IMPORT'
      | 'API'
      | 'WEBHOOK'
      | 'MANUAL',
    public readonly campaign: string | null,
    public readonly medium: string | null,
    public readonly sourceId: string | null,
    public readonly trackingMetadata: Record<string, unknown>,
  ) {}
}

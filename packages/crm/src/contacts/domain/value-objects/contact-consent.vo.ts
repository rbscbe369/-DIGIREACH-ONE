export class ContactConsent {
  constructor(
    public readonly privacy: boolean,
    public readonly marketing: boolean,
    public readonly email: boolean,
    public readonly sms: boolean,
    public readonly whatsapp: boolean,
    public readonly phone: boolean,
    public readonly cookies: boolean,
    public readonly dataProcessing: boolean,
    public readonly consentHistory: Record<string, unknown>[],
    public readonly consentSource: string | null,
    public readonly consentVersion: string | null,
  ) {}
}

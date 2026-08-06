export class LeadConsent {
  constructor(
    public readonly optInEmail: boolean,
    public readonly optInSms: boolean,
    public readonly optInPhone: boolean,
    public readonly privacyPolicyAccepted: boolean,
    public readonly lastUpdated: Date,
  ) {}
}

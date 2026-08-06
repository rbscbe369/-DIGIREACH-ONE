export class AccountPreference {
  constructor(
    public readonly preferredLanguage: string | null,
    public readonly timeZone: string | null,
    public readonly invoiceDeliveryMethod: string | null,
  ) {}
}

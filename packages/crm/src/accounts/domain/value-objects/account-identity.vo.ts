export class AccountIdentity {
  constructor(
    public readonly accountNumber: string,
    public readonly externalId: string | null,
    public readonly registrationNumber: string | null,
    public readonly gst: string | null,
    public readonly pan: string | null,
    public readonly vat: string | null,
    public readonly duns: string | null,
    public readonly legacyReference: string | null,
    public readonly erpReference: string | null,
  ) {}
}

export class ContactIdentity {
  constructor(
    public readonly contactNumber: string,
    public readonly externalId: string | null,
    public readonly governmentId: string | null,
    public readonly passport: string | null,
    public readonly nationalId: string | null,
    public readonly taxId: string | null,
    public readonly customerReference: string | null,
    public readonly legacyReference: string | null,
  ) {}
}

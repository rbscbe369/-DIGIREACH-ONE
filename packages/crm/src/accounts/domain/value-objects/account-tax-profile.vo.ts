export class AccountTaxProfile {
  constructor(
    public readonly taxExempt: boolean,
    public readonly taxExemptReason: string | null,
    public readonly taxCertificateId: string | null,
    public readonly taxJurisdiction: string | null,
  ) {}
}

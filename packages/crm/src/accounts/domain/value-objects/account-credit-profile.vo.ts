export class AccountCreditProfile {
  constructor(
    public readonly creditLimit: number | null,
    public readonly creditRating: string | null,
    public readonly paymentTerms: string | null,
    public readonly riskCategory: string | null,
  ) {}
}

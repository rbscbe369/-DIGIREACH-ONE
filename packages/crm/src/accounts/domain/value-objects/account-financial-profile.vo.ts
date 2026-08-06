export class AccountFinancialProfile {
  constructor(
    public readonly preferredCurrency: string | null,
    public readonly annualRevenue: number | null,
    public readonly outstandingBalance: number | null,
  ) {}
}

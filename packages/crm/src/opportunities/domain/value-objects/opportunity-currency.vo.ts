export class OpportunityCurrency {
  constructor(
    public readonly currencyCode: string,
    public readonly exchangeRate: number,
    public readonly exchangeDate: Date,
  ) {}
}

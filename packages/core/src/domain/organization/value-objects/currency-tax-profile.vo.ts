export class CurrencyProfile {
  constructor(
    public readonly baseCurrencyCode: string,
    public readonly supportedCurrencies: string[],
  ) {}
}

export class TaxProfile {
  constructor(
    public readonly taxIdentificationNumber: string,
    public readonly defaultTaxRate: number,
    public readonly jurisdictionCode: string,
  ) {}
}

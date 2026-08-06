export class OpportunityRevenue {
  constructor(
    public readonly estimatedRevenue: number,
    public readonly recurringRevenue: number,
    public readonly oneTimeRevenue: number,
    public readonly monthlyRevenue: number,
    public readonly annualRevenue: number,
    public readonly margin: number,
    public readonly discount: number,
    public readonly taxEstimate: number,
  ) {}
}

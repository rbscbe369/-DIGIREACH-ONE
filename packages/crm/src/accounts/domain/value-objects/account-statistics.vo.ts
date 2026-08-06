export class AccountStatistics {
  constructor(
    public readonly totalOpportunities: number,
    public readonly wonOpportunities: number,
    public readonly totalLifetimeValue: number,
    public readonly openCases: number,
  ) {}
}

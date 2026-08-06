export class CRMStatistics {
  constructor(
    public readonly totalLeads: number,
    public readonly totalContacts: number,
    public readonly totalAccounts: number,
    public readonly pipelineValue: number,
    public readonly conversionRate: number,
    public readonly averageDealSize: number,
    public readonly wonDeals: number,
    public readonly lostDeals: number,
    public readonly customerLifetimeValue: number,
  ) {}
}

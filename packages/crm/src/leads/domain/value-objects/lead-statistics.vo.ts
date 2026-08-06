export class LeadStatistics {
  constructor(
    public readonly totalInteractions: number,
    public readonly emailOpens: number,
    public readonly linkClicks: number,
    public readonly websiteVisits: number,
    public readonly meetingsAttended: number,
  ) {}
}

export class OpportunityCompetitor {
  constructor(
    public readonly competitorName: string,
    public readonly strength: string | null,
    public readonly weakness: string | null,
    public readonly pricing: string | null,
    public readonly threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
    public readonly winStrategy: string | null,
    public readonly lossReason: string | null,
  ) {}
}

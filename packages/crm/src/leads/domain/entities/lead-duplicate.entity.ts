export class LeadDuplicate {
  constructor(
    public readonly id: string,
    public readonly primaryLeadId: string,
    public readonly duplicateLeadId: string,
    public readonly matchType: 'EXACT' | 'POSSIBLE' | 'AI_SUGGESTED',
    public readonly matchScore: number,
    public readonly resolution: 'PENDING' | 'MERGED' | 'IGNORED',
  ) {}
}

export class AccountDuplicate {
  constructor(
    public readonly id: string,
    public readonly primaryAccountId: string,
    public readonly duplicateAccountId: string,
    public readonly matchType: 'EXACT' | 'POSSIBLE' | 'AI_SUGGESTED',
    public readonly matchScore: number,
    public readonly matchingMetadata: Record<string, unknown>,
    public readonly resolution: 'PENDING' | 'MERGED' | 'IGNORED',
  ) {}
}

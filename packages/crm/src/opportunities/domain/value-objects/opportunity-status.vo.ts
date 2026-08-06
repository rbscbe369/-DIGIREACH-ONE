export type OpportunityStatusValue =
  'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'WON' | 'LOST' | 'CANCELLED' | 'ARCHIVED';

export class OpportunityStatus {
  constructor(
    public readonly value: OpportunityStatusValue,
    public readonly reason: string | null,
    public readonly updatedAt: Date,
  ) {}
}

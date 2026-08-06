export type LeadStatusValue =
  | 'NEW'
  | 'CONTACTED'
  | 'FOLLOW_UP'
  | 'QUALIFIED'
  | 'DISQUALIFIED'
  | 'CONVERTED'
  | 'LOST'
  | 'ARCHIVED';

export class LeadStatus {
  constructor(
    public readonly value: LeadStatusValue,
    public readonly reason: string | null,
    public readonly updatedAt: Date,
  ) {}
}

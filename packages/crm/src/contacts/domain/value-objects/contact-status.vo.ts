export type ContactStatusValue = 'ACTIVE' | 'INACTIVE' | 'BLOCKED' | 'ARCHIVED';

export class ContactStatus {
  constructor(
    public readonly value: ContactStatusValue,
    public readonly reason: string | null,
    public readonly updatedAt: Date,
  ) {}
}

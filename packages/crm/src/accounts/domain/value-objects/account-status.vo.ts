export type AccountStatusValue = 'ACTIVE' | 'INACTIVE' | 'ON_HOLD' | 'BLOCKED' | 'ARCHIVED';

export class AccountStatus {
  constructor(
    public readonly value: AccountStatusValue,
    public readonly reason: string | null,
    public readonly updatedAt: Date,
  ) {}
}

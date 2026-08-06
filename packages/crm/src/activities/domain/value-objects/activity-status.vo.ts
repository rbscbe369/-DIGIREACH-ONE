export type ActivityStatusValue =
  'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'ON_HOLD' | 'DEFERRED' | 'ARCHIVED';

export class ActivityStatus {
  constructor(
    public readonly value: ActivityStatusValue,
    public readonly updatedAt: Date,
  ) {}
}

export class LeadLifecycle {
  constructor(
    public readonly isConverted: boolean,
    public readonly isArchived: boolean,
    public readonly convertedAt: Date | null,
    public readonly createdAt: Date,
    public readonly lastActivityAt: Date | null,
  ) {}
}

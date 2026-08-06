export class OpportunityLifecycle {
  constructor(
    public readonly isArchived: boolean,
    public readonly createdAt: Date,
    public readonly lastActivityAt: Date | null,
  ) {}
}

export class OpportunityActivity {
  constructor(
    public readonly activityId: string,
    public readonly activityType: string,
    public readonly occurredAt: Date,
  ) {}
}

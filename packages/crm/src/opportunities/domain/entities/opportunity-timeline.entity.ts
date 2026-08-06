export class OpportunityTimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type:
      | 'CREATED'
      | 'UPDATED'
      | 'STAGE_CHANGED'
      | 'OWNER_CHANGED'
      | 'FORECAST_CHANGED'
      | 'ACTIVITY_ADDED'
      | 'MEETING'
      | 'EMAIL'
      | 'CALL'
      | 'DOCUMENT'
      | 'WORKFLOW'
      | 'AI_INTERACTION',
    public readonly timestamp: Date,
    public readonly data: Record<string, unknown>,
  ) {}
}

export class OpportunityTimeline {
  constructor(public readonly events: OpportunityTimelineEvent[] = []) {}
}

export class LeadTimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type:
      | 'CREATED'
      | 'ASSIGNED'
      | 'CALLED'
      | 'EMAIL'
      | 'WHATSAPP'
      | 'MEETING'
      | 'QUALIFIED'
      | 'CONVERTED',
    public readonly timestamp: Date,
    public readonly data: Record<string, unknown>,
  ) {}
}

export class LeadTimeline {
  constructor(public readonly events: LeadTimelineEvent[] = []) {}
}

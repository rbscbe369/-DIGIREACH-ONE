export class TimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type: string,
    public readonly timestamp: Date,
    public readonly summary: string,
  ) {}
}

export class CustomerInteractionTimeline {
  constructor(public readonly events: TimelineEvent[] = []) {}
}

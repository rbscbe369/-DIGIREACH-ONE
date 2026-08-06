export class ActivityTimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type:
      | 'CREATED'
      | 'UPDATED'
      | 'ASSIGNED'
      | 'COMPLETED'
      | 'CANCELLED'
      | 'REMINDER_TRIGGERED'
      | 'CHECKLIST_UPDATED'
      | 'PARTICIPANT_ADDED'
      | 'DOCUMENT_ATTACHED'
      | 'AI_INTERACTION',
    public readonly timestamp: Date,
    public readonly data: Record<string, unknown>,
  ) {}
}

export class ActivityTimeline {
  constructor(public readonly events: ActivityTimelineEvent[] = []) {}
}

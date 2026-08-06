export class ContactTimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type:
      | 'CREATED'
      | 'UPDATED'
      | 'CALL'
      | 'EMAIL'
      | 'SMS'
      | 'WHATSAPP'
      | 'MEETING'
      | 'TASK'
      | 'NOTE'
      | 'DOCUMENT'
      | 'WORKFLOW'
      | 'AI_INTERACTION',
    public readonly timestamp: Date,
    public readonly data: Record<string, unknown>,
  ) {}
}

export class ContactTimeline {
  constructor(public readonly events: ContactTimelineEvent[] = []) {}
}

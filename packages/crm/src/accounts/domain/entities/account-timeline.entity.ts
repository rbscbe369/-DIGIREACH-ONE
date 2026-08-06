export class AccountTimelineEvent {
  constructor(
    public readonly eventId: string,
    public readonly type:
      | 'CREATED'
      | 'UPDATED'
      | 'BRANCH_ADDED'
      | 'RELATIONSHIP_ADDED'
      | 'DOCUMENT_ADDED'
      | 'WORKFLOW'
      | 'COMMUNICATION'
      | 'MEETING'
      | 'AI_INTERACTION',
    public readonly timestamp: Date,
    public readonly data: Record<string, unknown>,
  ) {}
}

export class AccountTimeline {
  constructor(public readonly events: AccountTimelineEvent[] = []) {}
}

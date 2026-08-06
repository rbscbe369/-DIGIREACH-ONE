export type ParticipantRole =
  'OWNER' | 'ASSIGNEE' | 'OBSERVER' | 'APPROVER' | 'REVIEWER' | 'GUEST' | 'EXTERNAL_PARTICIPANT';

export class ActivityParticipant {
  constructor(
    public readonly entityId: string,
    public readonly role: ParticipantRole,
    public readonly isAttending: boolean | null,
  ) {}
}

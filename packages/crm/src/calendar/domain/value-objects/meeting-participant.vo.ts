export type ParticipantRole =
  | 'ORGANIZER'
  | 'HOST'
  | 'PRESENTER'
  | 'MODERATOR'
  | 'ATTENDEE'
  | 'OBSERVER'
  | 'GUEST'
  | 'EXTERNAL_PARTICIPANT';
export class MeetingParticipant {
  constructor(
    public readonly participantId: string,
    public readonly role: ParticipantRole,
    public readonly status:
      'ACCEPTED' | 'DECLINED' | 'TENTATIVE' | 'PENDING' | 'ATTENDED' | 'MISSED',
  ) {}
}

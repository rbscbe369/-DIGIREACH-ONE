import { Meeting } from '../../domain/entities/meeting.entity';
import { MeetingParticipant } from '../../domain/value-objects/meeting-participant.vo';
export class InvitationService {
  invite(meeting: Meeting, participant: MeetingParticipant): void {
    meeting.participants.push(participant);
  }
}

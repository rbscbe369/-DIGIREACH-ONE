import { MeetingParticipant } from '../value-objects/meeting-participant.vo';
import { MeetingAgenda } from '../value-objects/meeting-agenda.vo';
import { MeetingNote } from '../value-objects/meeting-note.vo';
import { MeetingOutcome } from '../value-objects/meeting-outcome.vo';
import { MeetingRecordingReference } from '../value-objects/meeting-recording-reference.vo';
import { MeetingTranscriptReference } from '../value-objects/meeting-transcript-reference.vo';
import { MeetingStatus } from '../value-objects/meeting-status.vo';
import { MeetingType } from '../value-objects/meeting-type.vo';
import { MeetingPriority } from '../value-objects/meeting-priority.vo';
import { MeetingAIProfile } from '../value-objects/meeting-ai-profile.vo';

export class Meeting {
  constructor(
    public readonly meetingId: string,
    public subject: string,
    public description: string | null,
    public organizerId: string,
    public hostId: string,
    public moderatorId: string | null,
    public participants: MeetingParticipant[],
    public agenda: MeetingAgenda,
    public notes: MeetingNote[],
    public outcome: MeetingOutcome | null,
    public status: MeetingStatus,
    public type: MeetingType,
    public priority: MeetingPriority,
    public conferenceLink: string | null,
    public recording: MeetingRecordingReference | null,
    public transcript: MeetingTranscriptReference | null,
    public aiProfile: MeetingAIProfile | null,
  ) {}
}

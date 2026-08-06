import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../../domain/entities/meeting.entity';

export class ScheduleMeetingUseCase {
  constructor(private readonly service: MeetingService) {}
  async execute(meeting: Meeting): Promise<void> {
    await this.service.saveMeeting(meeting);
  }
}

export class RescheduleMeetingUseCase {
  constructor(private readonly service: MeetingService) {}
  async execute(meeting: Meeting): Promise<void> {
    await this.service.saveMeeting(meeting);
  }
}

export class CancelMeetingUseCase {
  constructor(private readonly service: MeetingService) {}
  async execute(meetingId: string): Promise<void> {
    const meeting = await this.service.getMeeting(meetingId);
    if (meeting) {
      // Logic to cancel
      await this.service.saveMeeting(meeting);
    }
  }
}

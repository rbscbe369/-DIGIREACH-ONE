import { IMeetingRepository } from '../../application/interfaces/i-meeting.repository';
import { Meeting } from '../../domain/entities/meeting.entity';
export class MemoryMeetingRepository implements IMeetingRepository {
  private meetings = new Map<string, Meeting>();
  async findById(id: string): Promise<Meeting | null> {
    return this.meetings.get(id) || null;
  }
  async save(meeting: Meeting): Promise<void> {
    this.meetings.set(meeting.meetingId, meeting);
  }
  async delete(id: string): Promise<void> {
    this.meetings.delete(id);
  }
}

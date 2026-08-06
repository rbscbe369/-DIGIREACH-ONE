import { IMeetingRepository } from '../interfaces/i-meeting.repository';
import { Meeting } from '../../domain/entities/meeting.entity';
export class MeetingService {
  constructor(private readonly repo: IMeetingRepository) {}
  async saveMeeting(meeting: Meeting): Promise<void> {
    await this.repo.save(meeting);
  }
  async getMeeting(id: string): Promise<Meeting | null> {
    return this.repo.findById(id);
  }
  async deleteMeeting(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

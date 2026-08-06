import { Meeting } from '../../domain/entities/meeting.entity';
export interface IMeetingRepository {
  findById(id: string): Promise<Meeting | null>;
  save(meeting: Meeting): Promise<void>;
  delete(id: string): Promise<void>;
}

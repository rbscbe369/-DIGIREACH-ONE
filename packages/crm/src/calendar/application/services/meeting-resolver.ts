import { Meeting } from '../../domain/entities/meeting.entity';
export class MeetingResolver {
  static resolve(data: unknown): Meeting {
    return data as Meeting;
  }
}

import { IConferenceProvider } from '../../application/interfaces/i-conference.provider';
export class DummyConferenceProvider implements IConferenceProvider {
  async generateLink(meetingId: string): Promise<string> {
    return 'https://meet.dummy/' + meetingId;
  }
}

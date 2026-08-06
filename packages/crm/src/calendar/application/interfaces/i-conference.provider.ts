export interface IConferenceProvider {
  generateLink(meetingId: string): Promise<string>;
}

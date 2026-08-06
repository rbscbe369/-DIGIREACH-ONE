export class MeetingRecordingReference {
  constructor(
    public readonly recordingUrl: string,
    public readonly durationSeconds: number,
  ) {}
}

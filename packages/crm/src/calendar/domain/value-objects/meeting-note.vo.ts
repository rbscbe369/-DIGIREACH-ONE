export class MeetingNote {
  constructor(
    public readonly authorId: string,
    public readonly content: string,
    public readonly timestamp: Date,
  ) {}
}

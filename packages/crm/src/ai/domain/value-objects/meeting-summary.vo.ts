export class MeetingSummary {
  constructor(
    public readonly summaryText: string,
    public readonly actionItems: string[],
    public readonly decisions: string[],
  ) {}
}

export class EmailSummary {
  constructor(
    public readonly sentiment: string,
    public readonly suggestedReply: string | null,
  ) {}
}

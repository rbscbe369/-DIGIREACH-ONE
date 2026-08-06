export class CallSummary {
  constructor(
    public readonly transcriptSummary: string,
    public readonly objectionsRaised: string[],
  ) {}
}

export class LeadStage {
  constructor(
    public readonly currentStage: string,
    public readonly previousStage: string | null,
    public readonly enteredAt: Date,
  ) {}
}

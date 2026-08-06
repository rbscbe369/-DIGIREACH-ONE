export class PipelineAssignment {
  constructor(
    public readonly ownerId: string,
    public readonly assignedAt: Date,
  ) {}
}

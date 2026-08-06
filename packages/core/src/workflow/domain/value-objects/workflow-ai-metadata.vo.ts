export class WorkflowAIMetadata {
  constructor(
    public readonly suggestedAssigneeId: string | null = null,
    public readonly suggestedPriorityScore: number | null = null,
    public readonly riskScore: number | null = null,
    public readonly expectedDurationMs: number | null = null,
    public readonly nextBestActionHint: string | null = null,
    public readonly processOptimizationHint: string | null = null,
  ) {}
}

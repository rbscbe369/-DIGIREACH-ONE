export class RuleAIMetadata {
  constructor(
    public readonly isAiGenerated: boolean = false,
    public readonly aiSuggestedRule: boolean = false,
    public readonly aiConfidenceScore: number | null = null,
    public readonly aiDecisionExplanation: string | null = null,
    public readonly aiConflictDetection: string[] = [],
    public readonly aiOptimizationHint: string | null = null,
  ) {}
}

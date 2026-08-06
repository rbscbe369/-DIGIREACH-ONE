export class WorkspaceAIContext {
  constructor(
    public readonly recommendedWidgets: string[],
    public readonly recommendedModules: string[],
    public readonly recommendedActions: string[],
    public readonly assistantProfile: string,
    public readonly predictionHints: Record<string, unknown>,
  ) {}
}

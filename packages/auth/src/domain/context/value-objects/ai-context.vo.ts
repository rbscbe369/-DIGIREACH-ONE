export class AIContext {
  constructor(
    public readonly personalizationProfileId?: string,
    public readonly preferredAgentMode?: string,
  ) {}
}

export class PromptContext {
  constructor(
    public readonly contextVariables: Record<string, unknown>,
    public readonly injectedData: string,
  ) {}
}

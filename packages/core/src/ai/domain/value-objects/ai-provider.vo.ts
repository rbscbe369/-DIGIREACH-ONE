export class AIProvider {
  constructor(
    public readonly id: string, // e.g. "openai", "anthropic", "azure"
    public readonly name: string,
    public readonly isAvailable: boolean,
    public readonly maxConcurrentRequests: number,
  ) {}
}

export class AITokenUsage {
  constructor(
    public readonly input: number,
    public readonly output: number,
    public readonly cached: number,
    public readonly reasoning: number,
    public readonly total: number,
  ) {}
}

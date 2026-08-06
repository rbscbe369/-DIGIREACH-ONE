export class AIConfidence {
  constructor(
    public readonly score: number,
    public readonly reasons: string[],
  ) {}
}

export class CustomerInsight {
  constructor(
    public readonly insightId: string,
    public readonly type: string,
    public readonly description: string,
    public readonly generatedAt: Date,
  ) {}
}

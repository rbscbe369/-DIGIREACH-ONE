export class CustomerRecommendation {
  constructor(
    public readonly recommendationId: string,
    public readonly type: string,
    public readonly suggestion: string,
    public readonly score: number,
  ) {}
}

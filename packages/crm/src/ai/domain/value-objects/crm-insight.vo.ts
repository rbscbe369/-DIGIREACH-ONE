export class CRMInsight {
  constructor(
    public readonly insightType: string,
    public readonly observation: string,
    public readonly confidenceScore: number,
  ) {}
}

export class MasterDataAIProfile {
  constructor(
    public readonly semanticEmbedding: number[],
    public readonly confidence: number,
    public readonly duplicateRisk: number,
  ) {}
}

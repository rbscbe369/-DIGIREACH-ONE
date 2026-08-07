export class ProductAIProfile {
  constructor(
    public readonly semanticEmbedding: string | null,
    public readonly demandPrediction: number,
    public readonly lifecyclePrediction: string,
    public readonly recommendedBundle: string | null,
    public readonly crossSellCandidates: string[],
    public readonly upsellCandidates: string[],
    public readonly replacementRecommendation: string | null,
    public readonly marketTrend: string,
    public readonly recommendationScore: number,
    public readonly searchEmbedding: string | null,
    public readonly embeddingId: string | null,
    public readonly semanticVectorReference: string | null,
    public readonly popularityScore: number,
    public readonly customerAffinity: number,
    public readonly bundleAffinity: number,
    public readonly replacementConfidence: number,
    public readonly demandConfidence: number,
    public readonly classificationConfidence: number,
    public readonly searchConfidence: number,
  ) {}
}

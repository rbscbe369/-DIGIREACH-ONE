export class SalesAIProfile {
  constructor(
    public readonly revenuePrediction: number,
    public readonly priceRecommendation: number,
    public readonly discountRecommendation: number,
    public readonly winProbability: number,
    public readonly crossSellRecommendation: string[],
    public readonly upsellRecommendation: string[],
    public readonly customerBuyingPattern: string,
    public readonly forecastConfidence: number,
    public readonly salesCoaching: string,
    public readonly recommendationConfidence: number,
    public readonly dealVelocity: number,
    public readonly pipelineVelocity: number,
    public readonly revenueConfidence: number,
    public readonly forecastVariance: number,
    public readonly conversionConfidence: number,
    public readonly opportunityHealth: number,
    public readonly salesProductivity: number,
  ) {}
}

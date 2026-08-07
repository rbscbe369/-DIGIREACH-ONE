export class PricingEvaluationResult {
  constructor(
    public readonly basePrice: number,
    public readonly finalCalculatedPrice: number,
    public readonly adjustmentsApplied: number,
    public readonly currency: string,
    public readonly pricingRuleIds: string[],
    public readonly pricingRuleSetIds: string[],
    public readonly evaluationTimestamp: Date,
    public readonly evaluationTrace: string[]
  ) {}
}

export class RevenueIntelligenceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RevenueIntelligenceError';
  }
}

export class InvalidProbabilityError extends RevenueIntelligenceError {
  constructor(probability: number) {
    super(`Invalid probability: ${probability}. Must be between 0 and 100.`);
  }
}

export class CrossCurrencyAggregationError extends RevenueIntelligenceError {
  constructor(targetCurrency: string, sourceCurrency: string) {
    super(
      `Cannot aggregate ${sourceCurrency} into ${targetCurrency} without an approved FX policy.`,
    );
  }
}

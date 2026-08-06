export class OpportunityProbability {
  constructor(public readonly probabilityPercentage: number) {
    if (probabilityPercentage < 0 || probabilityPercentage > 100) {
      throw new Error('Probability must be between 0 and 100');
    }
  }
}

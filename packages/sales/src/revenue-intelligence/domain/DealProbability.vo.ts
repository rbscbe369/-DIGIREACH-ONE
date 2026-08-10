import { InvalidProbabilityError } from './errors';

export type ProbabilitySource = 'CRM_FACTUAL' | 'DERIVED';

export class DealProbability {
  constructor(
    public readonly value: number,
    public readonly source: ProbabilitySource,
  ) {
    if (value < 0 || value > 100 || isNaN(value)) {
      throw new InvalidProbabilityError(value);
    }
  }
}

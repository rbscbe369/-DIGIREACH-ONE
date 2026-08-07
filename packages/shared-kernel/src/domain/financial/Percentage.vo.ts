import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export class Percentage extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    if (value < 0 || value > 100) throw new DomainError('Percentage must be between 0 and 100');
  }
}

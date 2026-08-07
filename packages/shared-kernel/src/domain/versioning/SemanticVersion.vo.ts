import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export class SemanticVersion extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    if (!/^d+.d+.d+$/.test(value)) throw new DomainError('Invalid SemVer');
  }
}

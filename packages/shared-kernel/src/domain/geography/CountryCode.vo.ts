import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export class CountryCode extends ValueObject<string> {
  constructor(code: string) {
    super(code);
    if (!/^[A-Z]{2}$/.test(code)) throw new DomainError('Invalid Country Code');
  }
}

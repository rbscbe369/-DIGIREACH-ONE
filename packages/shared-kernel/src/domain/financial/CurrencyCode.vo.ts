import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export class CurrencyCode extends ValueObject<string> {
  constructor(code: string) {
    super(code);
    if (!/^[A-Z]{3}$/.test(code)) throw new DomainError('Invalid Currency Code');
  }
}

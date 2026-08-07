import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export class EmailAddress extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    if (!value.includes('@')) throw new DomainError('Invalid Email Address');
  }
}

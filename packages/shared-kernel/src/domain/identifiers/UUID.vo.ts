import { Identifier } from './Identifier.vo';
import { DomainError } from '../base/DomainError';
export class UUID extends Identifier {
  constructor(value: string) {
    super(value);
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) {
      throw new DomainError('Invalid UUID format');
    }
  }
}

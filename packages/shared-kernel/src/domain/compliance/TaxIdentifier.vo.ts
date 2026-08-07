import { ValueObject } from '../base/ValueObject';
export class TaxIdentifier extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

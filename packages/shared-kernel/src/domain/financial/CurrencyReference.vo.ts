import { ValueObject } from '../base/ValueObject';
export class CurrencyReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

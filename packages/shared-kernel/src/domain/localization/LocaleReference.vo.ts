import { ValueObject } from '../base/ValueObject';
export class LocaleReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

import { ValueObject } from '../base/ValueObject';
export class UriReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

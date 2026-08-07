import { ValueObject } from '../base/ValueObject';
export class PhoneNumber extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

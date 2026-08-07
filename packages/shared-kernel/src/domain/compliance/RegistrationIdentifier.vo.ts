import { ValueObject } from '../base/ValueObject';
export class RegistrationIdentifier extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

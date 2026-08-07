import { ValueObject } from '../base/ValueObject';
export abstract class Identifier extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

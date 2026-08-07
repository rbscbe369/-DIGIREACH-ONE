import { ValueObject } from '../base/ValueObject';
export class LocalDate extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

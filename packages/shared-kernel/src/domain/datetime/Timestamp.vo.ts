import { ValueObject } from '../base/ValueObject';
export class Timestamp extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}

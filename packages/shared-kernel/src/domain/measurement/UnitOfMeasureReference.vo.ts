import { ValueObject } from '../base/ValueObject';
export class UnitOfMeasureReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

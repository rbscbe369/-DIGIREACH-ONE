import { ValueObject } from '../base/ValueObject';
export class RegionReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

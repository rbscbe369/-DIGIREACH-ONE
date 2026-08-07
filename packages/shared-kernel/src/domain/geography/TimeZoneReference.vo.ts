import { ValueObject } from '../base/ValueObject';
export class TimeZoneReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

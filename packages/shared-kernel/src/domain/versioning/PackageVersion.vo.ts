import { ValueObject } from '../base/ValueObject';
export class PackageVersion extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

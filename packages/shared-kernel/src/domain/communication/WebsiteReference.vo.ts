import { ValueObject } from '../base/ValueObject';
export class WebsiteReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

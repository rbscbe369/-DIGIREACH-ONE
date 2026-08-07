import { ValueObject } from '../base/ValueObject';
export class LanguageReference extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}

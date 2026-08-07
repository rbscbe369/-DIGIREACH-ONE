import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';

export class CurrencyCode extends ValueObject<string> {
  constructor(code: string) {
    super(code.toUpperCase());
    if (!/^[A-Z]{3}$/.test(this.props)) {
      throw new DomainError('Invalid Currency Code');
    }
  }

  public get decimalPlaces(): number {
    switch (this.props) {
      case 'JPY':
      case 'KRW':
      case 'CLP':
      case 'VND':
        return 0;
      case 'BHD':
      case 'KWD':
      case 'OMR':
      case 'JOD':
      case 'TND':
        return 3;
      default:
        return 2;
    }
  }
}

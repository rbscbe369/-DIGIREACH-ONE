import { ValueObject } from '../base/ValueObject';
import { CurrencyCode } from './CurrencyCode.vo';
export interface MoneyProps {
  amount: number;
  currency: CurrencyCode;
}
export class Money extends ValueObject<MoneyProps> {
  constructor(props: MoneyProps) {
    super(props);
  }
}

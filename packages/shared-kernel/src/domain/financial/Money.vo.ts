import { ValueObject } from '../base/ValueObject';
import { CurrencyCode } from './CurrencyCode.vo';
import { DomainError } from '../base/DomainError';

export interface MoneyProps {
  minorUnits: number;
  currency: CurrencyCode;
}

export class Money extends ValueObject<MoneyProps> {
  constructor(props: MoneyProps) {
    if (!Number.isInteger(props.minorUnits)) {
      throw new DomainError('Money amount must be an integer representing minor units.');
    }
    if (!Number.isSafeInteger(props.minorUnits)) {
      throw new DomainError('Money amount is outside safe integer range.');
    }
    super(props);
  }

  public static fromDecimal(decimalAmount: number, currencyCode: string): Money {
    if (isNaN(decimalAmount) || !isFinite(decimalAmount)) {
      throw new DomainError('Invalid decimal amount.');
    }
    const currency = new CurrencyCode(currencyCode);
    const multiplier = Math.pow(10, currency.decimalPlaces);
    // Standard commercial half-up rounding
    const minorUnits = Math.round(decimalAmount * multiplier);
    return new Money({ minorUnits, currency });
  }

  public static fromMinorUnits(minorUnits: number, currencyCode: string): Money {
    return new Money({ minorUnits, currency: new CurrencyCode(currencyCode) });
  }

  public get decimalAmount(): number {
    const divisor = Math.pow(10, this.props.currency.decimalPlaces);
    return this.props.minorUnits / divisor;
  }

  public get currencyCode(): string {
    return this.props.currency.props;
  }

  public get minorUnits(): number {
    return this.props.minorUnits;
  }

  private checkCurrencyMatch(other: Money): void {
    if (this.props.currency.props !== other.props.currency.props) {
      throw new DomainError('Cannot perform arithmetic operations on different currencies.');
    }
  }

  public add(other: Money): Money {
    this.checkCurrencyMatch(other);
    return new Money({
      minorUnits: this.props.minorUnits + other.props.minorUnits,
      currency: this.props.currency,
    });
  }

  public subtract(other: Money): Money {
    this.checkCurrencyMatch(other);
    return new Money({
      minorUnits: this.props.minorUnits - other.props.minorUnits,
      currency: this.props.currency,
    });
  }

  public multiply(multiplier: number): Money {
    if (isNaN(multiplier) || !isFinite(multiplier)) {
      throw new DomainError('Invalid multiplier.');
    }
    // Half-up rounding
    const result = Math.round(this.props.minorUnits * multiplier);
    return new Money({
      minorUnits: result,
      currency: this.props.currency,
    });
  }

  public allocate(n: number): Money[] {
    if (!Number.isInteger(n) || n <= 0) {
      throw new DomainError('Allocation must be a positive integer.');
    }
    const baseShare = Math.floor(this.props.minorUnits / n);
    let remainder = this.props.minorUnits % n;

    const results: Money[] = [];
    for (let i = 0; i < n; i++) {
      let share = baseShare;
      if (remainder > 0) {
        share += 1;
        remainder -= 1;
      } else if (remainder < 0) {
        share -= 1;
        remainder += 1;
      }
      results.push(new Money({ minorUnits: share, currency: this.props.currency }));
    }
    return results;
  }

  public allocateRatios(ratios: number[]): Money[] {
    const total = ratios.reduce((a, b) => a + b, 0);
    if (total <= 0) throw new DomainError('Total ratio must be positive.');

    let remainder = this.props.minorUnits;
    const results: Money[] = [];

    for (let i = 0; i < ratios.length; i++) {
      // Allocate proportional minor units
      const share = Math.floor((this.props.minorUnits * ratios[i]!) / total);
      results.push(new Money({ minorUnits: share, currency: this.props.currency }));
      remainder -= share;
    }

    // Distribute remainder 1 minor unit at a time to the highest allocations first
    // Just a simple left-to-right distribution for demonstration.
    // In production, often allocated to the largest ratios or first items.
    let i = 0;
    while (remainder > 0) {
      results[i] = new Money({
        minorUnits: results[i]!.minorUnits + 1,
        currency: this.props.currency,
      });
      remainder -= 1;
      i = (i + 1) % results.length;
    }
    while (remainder < 0) {
      results[i] = new Money({
        minorUnits: results[i]!.minorUnits - 1,
        currency: this.props.currency,
      });
      remainder += 1;
      i = (i + 1) % results.length;
    }

    return results;
  }

  public override equals(other: Money): boolean {
    return (
      this.props.currency.props === other.props.currency.props &&
      this.props.minorUnits === other.props.minorUnits
    );
  }

  public compareTo(other: Money): number {
    this.checkCurrencyMatch(other);
    return this.props.minorUnits - other.props.minorUnits;
  }
}

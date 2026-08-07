import { Money } from '../../../src/domain/financial/Money.vo';
import { CurrencyCode } from '../../../src/domain/financial/CurrencyCode.vo';
import { DomainError } from '../../../src/domain/base/DomainError';

describe('CurrencyCode', () => {
  it('should validate 3 letter uppercase codes', () => {
    expect(() => new CurrencyCode('USD')).not.toThrow();
    expect(() => new CurrencyCode('eur')).not.toThrow(); // uppercase cast happens internally
    expect(() => new CurrencyCode('US')).toThrow(DomainError);
    expect(() => new CurrencyCode('USDD')).toThrow(DomainError);
  });

  it('should correctly report precision', () => {
    expect(new CurrencyCode('USD').decimalPlaces).toBe(2);
    expect(new CurrencyCode('JPY').decimalPlaces).toBe(0);
    expect(new CurrencyCode('BHD').decimalPlaces).toBe(3);
  });
});

describe('Money', () => {
  describe('Construction', () => {
    it('should construct from minor units safely', () => {
      const m = Money.fromMinorUnits(1050, 'USD');
      expect(m.minorUnits).toBe(1050);
      expect(m.currencyCode).toBe('USD');
      expect(m.decimalAmount).toBe(10.5);
    });

    it('should construct from decimal correctly using currency precision', () => {
      const usd = Money.fromDecimal(10.5, 'USD');
      expect(usd.minorUnits).toBe(1050);

      const jpy = Money.fromDecimal(1000, 'JPY');
      expect(jpy.minorUnits).toBe(1000);
      expect(jpy.decimalAmount).toBe(1000);

      const bhd = Money.fromDecimal(10.125, 'BHD');
      expect(bhd.minorUnits).toBe(10125);
    });

    it('should throw on non-integer minor units', () => {
      expect(() => Money.fromMinorUnits(10.5, 'USD')).toThrow(DomainError);
    });

    it('should handle zero correctly', () => {
      const m = Money.fromDecimal(0, 'USD');
      expect(m.minorUnits).toBe(0);
      expect(m.decimalAmount).toBe(0);
    });

    it('should handle negative values correctly', () => {
      const m = Money.fromDecimal(-10.5, 'USD');
      expect(m.minorUnits).toBe(-1050);
      expect(m.decimalAmount).toBe(-10.5);
    });
  });

  describe('Arithmetic', () => {
    it('should add amounts with the same currency', () => {
      const m1 = Money.fromDecimal(10.5, 'USD');
      const m2 = Money.fromDecimal(20.25, 'USD');
      const sum = m1.add(m2);
      expect(sum.minorUnits).toBe(3075);
      expect(sum.decimalAmount).toBe(30.75);
    });

    it('should resolve floating point edge cases flawlessly (0.1 + 0.2)', () => {
      // In normal JS: 0.1 + 0.2 = 0.30000000000000004
      const m1 = Money.fromDecimal(0.1, 'USD'); // 10 minor
      const m2 = Money.fromDecimal(0.2, 'USD'); // 20 minor
      const sum = m1.add(m2);
      expect(sum.minorUnits).toBe(30);
      expect(sum.decimalAmount).toBe(0.3); // Exactly 0.3
    });

    it('should subtract amounts with the same currency', () => {
      const m1 = Money.fromDecimal(20.5, 'USD');
      const m2 = Money.fromDecimal(10.25, 'USD');
      const diff = m1.subtract(m2);
      expect(diff.decimalAmount).toBe(10.25);
    });

    it('should throw when operating across currencies', () => {
      const usd = Money.fromDecimal(10, 'USD');
      const eur = Money.fromDecimal(10, 'EUR');
      expect(() => usd.add(eur)).toThrow(DomainError);
      expect(() => usd.subtract(eur)).toThrow(DomainError);
    });

    it('should multiply and round Half-Up correctly', () => {
      const base = Money.fromDecimal(10.5, 'USD');
      const result = base.multiply(1.15); // 10.50 * 1.15 = 12.075
      // 12.075 -> 1207.5 minor units -> rounds to 1208 minor units = 12.08
      expect(result.decimalAmount).toBe(12.08);
      expect(result.minorUnits).toBe(1208);
    });
  });

  describe('Allocation', () => {
    it('should allocate evenly with no remainder', () => {
      const m = Money.fromDecimal(30, 'USD');
      const parts = m.allocate(3);
      expect(parts.length).toBe(3);
      expect(parts[0]?.decimalAmount).toBe(10);
      expect(parts[1]?.decimalAmount).toBe(10);
      expect(parts[2]?.decimalAmount).toBe(10);
    });

    it('should distribute remainders correctly', () => {
      const m = Money.fromDecimal(10, 'USD'); // 1000 minor units
      const parts = m.allocate(3); // 1000 / 3 = 333, remainder 1
      expect(parts[0]?.minorUnits).toBe(334);
      expect(parts[1]?.minorUnits).toBe(333);
      expect(parts[2]?.minorUnits).toBe(333);
    });

    it('should allocate ratios properly', () => {
      const m = Money.fromDecimal(100, 'USD'); // 10000
      const parts = m.allocateRatios([3, 7]);
      expect(parts[0]?.decimalAmount).toBe(30);
      expect(parts[1]?.decimalAmount).toBe(70);
    });
  });

  describe('Equality and Comparison', () => {
    it('should check equality correctly', () => {
      expect(Money.fromDecimal(10, 'USD').equals(Money.fromDecimal(10, 'USD'))).toBe(true);
      expect(Money.fromDecimal(10, 'USD').equals(Money.fromDecimal(20, 'USD'))).toBe(false);
      expect(Money.fromDecimal(10, 'USD').equals(Money.fromDecimal(10, 'EUR'))).toBe(false);
    });

    it('should compare amounts correctly', () => {
      expect(Money.fromDecimal(20, 'USD').compareTo(Money.fromDecimal(10, 'USD'))).toBeGreaterThan(
        0,
      );
      expect(Money.fromDecimal(10, 'USD').compareTo(Money.fromDecimal(20, 'USD'))).toBeLessThan(0);
      expect(Money.fromDecimal(10, 'USD').compareTo(Money.fromDecimal(10, 'USD'))).toBe(0);
    });
  });
});

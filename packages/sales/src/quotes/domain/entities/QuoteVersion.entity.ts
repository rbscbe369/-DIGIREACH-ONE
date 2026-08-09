import { QuoteLine } from './QuoteLine.entity';
import { QuoteTotals } from '../value-objects/QuoteTotals.vo';

export class QuoteVersion {
  constructor(
    public readonly versionNumber: number,
    public readonly lines: QuoteLine[],
    public readonly totals: QuoteTotals,
    public readonly createdAt: Date,
  ) {}
}

import { QuoteStatus } from '../value-objects/QuoteStatus.vo';
import { QuoteMetadata } from '../value-objects/QuoteMetadata.vo';
import { QuoteTotals } from '../value-objects/QuoteTotals.vo';
import { QuoteVersion } from './QuoteVersion.entity';
import { QuoteLine } from './QuoteLine.entity';
import { InvalidQuoteTransitionError } from '../errors/InvalidQuoteTransitionError';

export class Quote {
  private versions: QuoteVersion[] = [];
  private currentLines: Map<string, QuoteLine> = new Map();

  constructor(
    public readonly quoteId: string,
    public readonly quoteNumber: string,
    public status: QuoteStatus,
    public readonly issueDate: Date | null,
    public readonly expirationDate: Date | null,
    public readonly metadata: QuoteMetadata,
    public currentTotals: QuoteTotals,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public addLine(line: QuoteLine): void {
    if (this.status !== QuoteStatus.Draft) {
      throw new InvalidQuoteTransitionError('Can only add lines in Draft status');
    }
    this.currentLines.set(line.lineId, line);
    this.recalculateTotals();
  }

  public removeLine(lineId: string): void {
    if (this.status !== QuoteStatus.Draft) {
      throw new InvalidQuoteTransitionError('Can only remove lines in Draft status');
    }
    this.currentLines.delete(lineId);
    this.recalculateTotals();
  }

  public getLines(): QuoteLine[] {
    return Array.from(this.currentLines.values());
  }

  private recalculateTotals(): void {
    let subtotal = 0;
    const adjustments = 0; // Simple adjustments placeholder at quote level
    for (const line of this.currentLines.values()) {
      subtotal += line.lineTotal;
    }
    this.currentTotals = QuoteTotals.create(subtotal, adjustments);
    this.updatedAt = new Date();
  }

  public createVersion(): void {
    const versionNum = this.versions.length + 1;
    // deep clone lines for immutable snapshot
    const snapLines = this.getLines().map((l) => l.clone(l.lineId));
    const snapTotals = new QuoteTotals(
      this.currentTotals.subtotal,
      this.currentTotals.adjustments,
      this.currentTotals.grandTotal,
    );

    this.versions.push(new QuoteVersion(versionNum, snapLines, snapTotals, new Date()));
  }

  public getVersions(): QuoteVersion[] {
    return [...this.versions];
  }

  public transitionTo(newStatus: QuoteStatus): void {
    const allowed: Record<string, string[]> = {
      [QuoteStatus.Draft]: [
        QuoteStatus.PendingApproval,
        QuoteStatus.Approved,
        QuoteStatus.Cancelled,
      ],
      [QuoteStatus.PendingApproval]: [
        QuoteStatus.Approved,
        QuoteStatus.Rejected,
        QuoteStatus.Cancelled,
      ],
      [QuoteStatus.Approved]: [QuoteStatus.Sent, QuoteStatus.Cancelled],
      [QuoteStatus.Sent]: [
        QuoteStatus.Accepted,
        QuoteStatus.Rejected,
        QuoteStatus.Expired,
        QuoteStatus.Cancelled,
      ],
      [QuoteStatus.Accepted]: [],
      [QuoteStatus.Rejected]: [],
      [QuoteStatus.Expired]: [],
      [QuoteStatus.Cancelled]: [],
    };

    if (!allowed[this.status]?.includes(newStatus)) {
      throw new InvalidQuoteTransitionError(
        `Cannot transition from ${this.status} to ${newStatus}`,
      );
    }

    if (newStatus === QuoteStatus.Approved || newStatus === QuoteStatus.Sent) {
      this.createVersion(); // Lock in snapshot
    }

    this.status = newStatus;
    this.updatedAt = new Date();
  }
}

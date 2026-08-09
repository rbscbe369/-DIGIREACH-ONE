import { PriceBookStatus } from '../value-objects/PriceBookStatus.vo';
import { PriceBookType } from '../value-objects/PriceBookType.vo';
import { PriceBookMetadata } from '../value-objects/PriceBookMetadata.vo';
import { PriceBookEntry } from './PriceBookEntry.entity';

export class PriceBook {
  private entries: Map<string, PriceBookEntry> = new Map();

  constructor(
    public readonly priceBookId: string,
    public readonly name: string,
    public readonly type: PriceBookType,
    public readonly currency: string,
    public status: PriceBookStatus,
    public readonly validFrom: Date | null,
    public readonly validTo: Date | null,
    public readonly metadata: PriceBookMetadata,
    public readonly version: number,
  ) {}

  public addEntry(entry: PriceBookEntry): void {
    if (this.status === PriceBookStatus.Archived) {
      throw new Error('Cannot modify archived Price Book');
    }
    this.entries.set(entry.entryId, entry);
  }

  public updateEntry(entry: PriceBookEntry): void {
    if (!this.entries.has(entry.entryId)) throw new Error('Entry not found');
    this.entries.set(entry.entryId, entry);
  }

  public removeEntry(entryId: string): void {
    this.entries.delete(entryId);
  }

  public getEntries(): PriceBookEntry[] {
    return Array.from(this.entries.values());
  }

  public activate(): void {
    this.status = PriceBookStatus.Active;
  }

  public archive(): void {
    this.status = PriceBookStatus.Archived;
  }

  public isEffectiveAt(date: Date): boolean {
    if (this.status !== PriceBookStatus.Active) return false;
    if (this.validFrom && this.validFrom > date) return false;
    if (this.validTo && this.validTo < date) return false;
    return true;
  }
}

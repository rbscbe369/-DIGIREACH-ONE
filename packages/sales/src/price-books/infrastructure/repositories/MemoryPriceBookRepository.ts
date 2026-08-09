import { IPriceBookRepository } from '../../application/interfaces/IPriceBookRepository';
import { PriceBook } from '../../domain/entities/PriceBook.entity';

export class MemoryPriceBookRepository implements IPriceBookRepository {
  private store: Map<string, PriceBook> = new Map();

  public async save(priceBook: PriceBook): Promise<void> {
    this.store.set(priceBook.priceBookId, priceBook);
  }

  public async findById(id: string): Promise<PriceBook | null> {
    return this.store.get(id) || null;
  }

  public async findAll(): Promise<PriceBook[]> {
    return Array.from(this.store.values());
  }
}

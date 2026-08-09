import { IQuoteRepository } from '../../application/interfaces/IQuoteRepository';
import { Quote } from '../../domain/entities/Quote.entity';

export class MemoryQuoteRepository implements IQuoteRepository {
  private store: Map<string, Quote> = new Map();

  public async save(quote: Quote): Promise<void> {
    this.store.set(quote.quoteId, quote);
  }

  public async findById(id: string): Promise<Quote | null> {
    return this.store.get(id) || null;
  }
}

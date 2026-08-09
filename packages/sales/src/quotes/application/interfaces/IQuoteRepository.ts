import { Quote } from '../../domain/entities/Quote.entity';

export interface IQuoteRepository {
  save(quote: Quote): Promise<void>;
  findById(id: string): Promise<Quote | null>;
}

import { PriceBook } from '../../domain/entities/PriceBook.entity';

export interface IPriceBookRepository {
  save(priceBook: PriceBook): Promise<void>;
  findById(id: string): Promise<PriceBook | null>;
  findAll(): Promise<PriceBook[]>;
}

import { Product } from '../../domain/entities/product.entity';
export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
}

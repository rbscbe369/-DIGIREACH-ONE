import { IProductRepository } from '../../application/interfaces/i-product.repository';
import { Product } from '../../domain/entities/product.entity';
export class MemoryProductRepository implements IProductRepository {
  private records = new Map<string, Product>();
  async findById(id: string): Promise<Product | null> {
    return this.records.get(id) || null;
  }
  async save(product: Product): Promise<void> {
    this.records.set(product.productId, product);
  }
}

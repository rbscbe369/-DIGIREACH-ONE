import { IProductRepository } from '../interfaces/i-product.repository';
import { Product } from '../../domain/entities/product.entity';
export class ProductService {
  constructor(private readonly repo: IProductRepository) {}
  async getProduct(id: string): Promise<Product | null> {
    return this.repo.findById(id);
  }
}

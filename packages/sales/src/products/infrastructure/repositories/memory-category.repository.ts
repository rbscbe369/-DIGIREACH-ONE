import { IProductCategoryRepository } from '../../application/interfaces/i-product-category.repository';
import { ProductCategory } from '../../domain/entities/product-category.entity';
export class MemoryCategoryRepository implements IProductCategoryRepository {
  async findById(_id: string): Promise<ProductCategory | null> {
    return null;
  }
}

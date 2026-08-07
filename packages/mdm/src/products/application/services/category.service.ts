import { IProductCategoryRepository } from '../interfaces/i-product-category.repository';
import { ProductCategory } from '../../domain/entities/product-category.entity';
export class CategoryService {
  constructor(private readonly repo: IProductCategoryRepository) {}
  async getCategory(id: string): Promise<ProductCategory | null> {
    return this.repo.findById(id);
  }
}

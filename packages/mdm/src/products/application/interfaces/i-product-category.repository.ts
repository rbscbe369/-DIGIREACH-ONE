import { ProductCategory } from '../../domain/entities/product-category.entity';
export interface IProductCategoryRepository {
  findById(id: string): Promise<ProductCategory | null>;
}

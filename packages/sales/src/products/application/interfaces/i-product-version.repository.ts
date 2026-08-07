import { ProductVersion } from '../../domain/entities/product-version.entity';
export interface IProductVersionRepository {
  findById(id: string): Promise<ProductVersion | null>;
  save(version: ProductVersion): Promise<void>;
}

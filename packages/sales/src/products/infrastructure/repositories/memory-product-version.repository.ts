import { IProductVersionRepository } from '../../application/interfaces/i-product-version.repository';
import { ProductVersion } from '../../domain/entities/product-version.entity';
export class MemoryProductVersionRepository implements IProductVersionRepository {
  async findById(_id: string): Promise<ProductVersion | null> {
    return null;
  }
  async save(_version: ProductVersion): Promise<void> {}
}

import { IProductVersionRepository } from '../interfaces/i-product-version.repository';
import { ProductVersion } from '../../domain/entities/product-version.entity';
export class ProductVersionService {
  constructor(private readonly repo: IProductVersionRepository) {}
  async getVersion(id: string): Promise<ProductVersion | null> {
    return this.repo.findById(id);
  }
}

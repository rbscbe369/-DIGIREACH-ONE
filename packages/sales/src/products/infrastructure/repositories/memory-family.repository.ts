import { IProductFamilyRepository } from '../../application/interfaces/i-product-family.repository';
import { ProductFamily } from '../../domain/entities/product-family.entity';
export class MemoryFamilyRepository implements IProductFamilyRepository {
  async findById(_id: string): Promise<ProductFamily | null> {
    return null;
  }
}

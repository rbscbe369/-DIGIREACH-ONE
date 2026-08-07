import { IProductFamilyRepository } from '../interfaces/i-product-family.repository';
import { ProductFamily } from '../../domain/entities/product-family.entity';
export class FamilyService {
  constructor(private readonly repo: IProductFamilyRepository) {}
  async getFamily(id: string): Promise<ProductFamily | null> {
    return this.repo.findById(id);
  }
}

import { ProductFamily } from '../../domain/entities/product-family.entity';
export interface IProductFamilyRepository {
  findById(id: string): Promise<ProductFamily | null>;
}

import { ProductService } from '../services/product.service';
export class GetProductUseCase {
  constructor(private readonly service: ProductService) {}
  async execute(id: string) {
    return this.service.getProduct(id);
  }
}

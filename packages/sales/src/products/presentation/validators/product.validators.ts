import { CreateProductDto } from '../dtos/product.dto';
export class ProductValidators {
  static validate(data: unknown) {
    return CreateProductDto.parse(data);
  }
}

import { SalesHealthDto } from '../dtos/sales.dto';
export class SalesValidators {
  static validateHealth(data: unknown) {
    return SalesHealthDto.parse(data);
  }
}

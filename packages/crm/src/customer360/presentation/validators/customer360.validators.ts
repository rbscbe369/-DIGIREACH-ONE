import { BuildCustomer360Dto } from '../dtos/customer360.dto';

export class Customer360Validators {
  static validateBuild(data: unknown) {
    return BuildCustomer360Dto.parse(data);
  }
}

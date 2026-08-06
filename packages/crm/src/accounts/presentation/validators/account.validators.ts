import { CreateAccountDto } from '../dtos/account.dto';

export class AccountValidators {
  static validateCreate(data: unknown) {
    return CreateAccountDto.parse(data);
  }
}

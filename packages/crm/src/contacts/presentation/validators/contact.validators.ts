import { CreateContactDto } from '../dtos/contact.dto';

export class ContactValidators {
  static validateCreate(data: unknown) {
    return CreateContactDto.parse(data);
  }
}

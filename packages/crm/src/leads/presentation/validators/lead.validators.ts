import { CreateLeadDto } from '../dtos/lead.dto';

export class LeadValidators {
  static validateCreate(data: unknown) {
    return CreateLeadDto.parse(data);
  }
}

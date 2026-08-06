import { CreateOpportunityDto } from '../dtos/opportunity.dto';

export class OpportunityValidators {
  static validateCreate(data: unknown) {
    return CreateOpportunityDto.parse(data);
  }
}

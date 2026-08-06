import { CustomerBriefing } from '../../domain/value-objects/customer-briefing.vo';
export class CustomerBriefingGenerator {
  generate(_data: unknown): CustomerBriefing {
    return new CustomerBriefing('Briefing', new Date());
  }
}

import { CustomerReferenceSummaries } from '../../domain/value-objects/customer-reference-summaries.vo';
import { CustomerProfile } from '../../domain/value-objects/customer-profile.vo';

export class CustomerProfileAssembler {
  assemble(_summaries: CustomerReferenceSummaries): CustomerProfile {
    return new CustomerProfile('Assembled Name', 'Assembled Summary', null);
  }
}

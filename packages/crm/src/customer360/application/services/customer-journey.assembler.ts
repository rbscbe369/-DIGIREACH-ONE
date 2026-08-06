import { CustomerReferenceSummaries } from '../../domain/value-objects/customer-reference-summaries.vo';
import { CustomerJourney } from '../../domain/value-objects/customer-journey.vo';

export class CustomerJourneyAssembler {
  assemble(_summaries: CustomerReferenceSummaries): CustomerJourney {
    return new CustomerJourney(null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, []);
  }
}

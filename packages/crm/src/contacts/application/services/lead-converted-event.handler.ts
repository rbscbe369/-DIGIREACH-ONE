import { LeadConvertedEventPayload } from '../../domain/events/lead-converted.event';
import { ConvertLeadToContactUseCase } from '../use-cases/contact.use-cases';

export class LeadConvertedEventHandler {
  constructor(private readonly convertUseCase: ConvertLeadToContactUseCase) {}

  async handle(event: LeadConvertedEventPayload): Promise<void> {
    // Decoupled conversion: Event payload -> Contact
    await this.convertUseCase.execute(event.leadId, event.metadata);
  }
}

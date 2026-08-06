import { LeadConvertedEventPayload } from '../../domain/events/lead-converted.event';
import { ConvertLeadToAccountUseCase } from '../use-cases/account.use-cases';

export class LeadConvertedEventHandler {
  constructor(private readonly convertUseCase: ConvertLeadToAccountUseCase) {}

  async handle(event: LeadConvertedEventPayload): Promise<void> {
    // Decoupled conversion: Event payload -> Account
    await this.convertUseCase.execute(event.leadId, event.metadata);
  }
}

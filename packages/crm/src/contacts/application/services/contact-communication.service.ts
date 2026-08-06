import { Contact } from '../../domain/entities/contact.entity';
import { ContactCommunication } from '../../domain/value-objects/contact-communication.vo';

export class ContactCommunicationService {
  async logCommunication(contact: Contact, communication: ContactCommunication): Promise<void> {
    contact.communications.push(communication);
  }
}

import { IContactMergeService } from '../interfaces/i-contact-merge.service';
import { Contact } from '../../domain/entities/contact.entity';

export class ContactMergeService implements IContactMergeService {
  async mergeContacts(_masterId: string, _duplicateIds: string[]): Promise<Contact> {
    // Placeholder merge logic
    return {} as Contact;
  }
}

import { Contact } from '../../domain/entities/contact.entity';

export interface IContactDuplicateDetector {
  detectDuplicates(contact: Contact): Promise<Contact[]>;
}

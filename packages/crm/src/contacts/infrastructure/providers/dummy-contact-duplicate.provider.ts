import { IContactDuplicateDetector } from '../../application/interfaces/i-contact-duplicate.detector';
import { Contact } from '../../domain/entities/contact.entity';

export class DummyContactDuplicateProvider implements IContactDuplicateDetector {
  async detectDuplicates(_contact: Contact): Promise<Contact[]> {
    return [];
  }
}

import { IContactSearchProvider } from '../../application/interfaces/i-contact-search.provider';
import { Contact } from '../../domain/entities/contact.entity';

export class DummyContactSearchProvider implements IContactSearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Contact[]> {
    return [];
  }
}

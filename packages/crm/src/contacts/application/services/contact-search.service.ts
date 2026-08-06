import { IContactSearchProvider } from '../interfaces/i-contact-search.provider';
import { Contact } from '../../domain/entities/contact.entity';

export class ContactSearchService {
  constructor(private readonly searchProvider: IContactSearchProvider) {}

  async searchContacts(query: string, metadata: Record<string, unknown>): Promise<Contact[]> {
    return this.searchProvider.search(query, metadata);
  }
}

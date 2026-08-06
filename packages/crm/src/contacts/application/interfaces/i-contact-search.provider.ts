import { Contact } from '../../domain/entities/contact.entity';

export interface IContactSearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Contact[]>;
}

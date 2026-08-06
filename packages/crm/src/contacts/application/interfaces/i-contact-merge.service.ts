import { Contact } from '../../domain/entities/contact.entity';

export interface IContactMergeService {
  mergeContacts(masterId: string, duplicateIds: string[]): Promise<Contact>;
}

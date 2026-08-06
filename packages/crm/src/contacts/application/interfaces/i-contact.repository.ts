import { Contact } from '../../domain/entities/contact.entity';

export interface IContactRepository {
  findById(id: string): Promise<Contact | null>;
  save(contact: Contact): Promise<void>;
  delete(id: string): Promise<void>;
}

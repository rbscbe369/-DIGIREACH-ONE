import { IContactRepository } from '../../application/interfaces/i-contact.repository';
import { Contact } from '../../domain/entities/contact.entity';

export class MemoryContactRepository implements IContactRepository {
  private contacts = new Map<string, Contact>();

  async findById(id: string): Promise<Contact | null> {
    return this.contacts.get(id) || null;
  }

  async save(contact: Contact): Promise<void> {
    this.contacts.set(contact.id, contact);
  }

  async delete(id: string): Promise<void> {
    this.contacts.delete(id);
  }
}

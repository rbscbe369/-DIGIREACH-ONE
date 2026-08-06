import { IContactRepository } from '../interfaces/i-contact.repository';
import { Contact } from '../../domain/entities/contact.entity';

export class ContactService {
  constructor(private readonly repo: IContactRepository) {}

  async getContact(id: string): Promise<Contact | null> {
    return this.repo.findById(id);
  }

  async saveContact(contact: Contact): Promise<void> {
    await this.repo.save(contact);
  }

  async deleteContact(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}

import { Contact } from '../../domain/entities/contact.entity';

export class ContactResolver {
  static resolveContact(data: unknown): Contact {
    return data as Contact; // Placeholder
  }
}

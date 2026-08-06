import { ContactService } from '../services/contact.service';
import { ContactMergeService } from '../services/contact-merge.service';
import { ContactSearchService } from '../services/contact-search.service';
import { Contact } from '../../domain/entities/contact.entity';
import { ContactConvertedFromLeadEvent } from '../../domain/events/contact.events';
import { ContactIdentity } from '../../domain/value-objects/contact-identity.vo';
import { ContactProfile, ContactName } from '../../domain/value-objects/contact-profile.vo';
import { ContactStatus } from '../../domain/value-objects/contact-status.vo';
import { ContactType } from '../../domain/value-objects/contact-type.vo';
import { ContactLifecycle } from '../../domain/value-objects/contact-lifecycle.vo';
import { ContactConsent } from '../../domain/value-objects/contact-consent.vo';
import { ContactPreferences } from '../../domain/value-objects/contact-preferences.vo';
import { ContactTimeline } from '../../domain/entities/contact-timeline.entity';
import { ContactAIProfile } from '../../domain/value-objects/contact-ai-profile.vo';
import { ContactStatistics } from '../../domain/value-objects/contact-statistics.vo';

export class CreateContactUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(contact: Contact): Promise<void> {
    await this.contactService.saveContact(contact);
  }
}

export class UpdateContactUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(contact: Contact): Promise<void> {
    await this.contactService.saveContact(contact);
  }
}

export class MergeContactsUseCase {
  constructor(private readonly mergeService: ContactMergeService) {}
  async execute(masterId: string, duplicateIds: string[]): Promise<Contact> {
    return this.mergeService.mergeContacts(masterId, duplicateIds);
  }
}

export class ArchiveContactUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(contactId: string): Promise<void> {
    const contact = await this.contactService.getContact(contactId);
    if (contact) {
      contact.archive();
      await this.contactService.saveContact(contact);
    }
  }
}

export class DeleteContactUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(contactId: string): Promise<void> {
    await this.contactService.deleteContact(contactId);
  }
}

export class SearchContactsUseCase {
  constructor(private readonly searchService: ContactSearchService) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Contact[]> {
    return this.searchService.searchContacts(query, metadata);
  }
}

export class GetContactTimelineUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(contactId: string): Promise<ContactTimeline | null> {
    const contact = await this.contactService.getContact(contactId);
    return contact ? contact.timeline : null;
  }
}

export class ConvertLeadToContactUseCase {
  constructor(private readonly contactService: ContactService) {}
  async execute(leadId: string, _metadata: Record<string, unknown>): Promise<Contact> {
    // Scaffold conversion logic
    const contact = new Contact(
      'new-contact-' + leadId,
      'tenant',
      new ContactIdentity('C-' + leadId, null, null, null, null, null, null, null),
      new ContactProfile(
        new ContactName('Converted', 'Lead', null, null, null),
        [],
        [],
        [],
        [],
        null,
        {},
      ),
      new ContactStatus('ACTIVE', null, new Date()),
      new ContactType('INDIVIDUAL'),
      new ContactLifecycle(false, new Date(), null),
      new ContactConsent(true, true, true, true, true, true, true, true, [], null, null),
      new ContactPreferences(null, null, null),
      [],
      [],
      new ContactTimeline([]),
      [],
      new ContactAIProfile(),
      new ContactStatistics(0, 0, 0),
      [],
    );
    await this.contactService.saveContact(contact);
    new ContactConvertedFromLeadEvent(contact.id, leadId);
    return contact;
  }
}

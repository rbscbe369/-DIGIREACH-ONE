import { ContactIdentity } from '../value-objects/contact-identity.vo';
import { ContactProfile } from '../value-objects/contact-profile.vo';
import { ContactStatus } from '../value-objects/contact-status.vo';
import { ContactType } from '../value-objects/contact-type.vo';
import { ContactLifecycle } from '../value-objects/contact-lifecycle.vo';
import { ContactConsent } from '../value-objects/contact-consent.vo';
import { ContactPreferences } from '../value-objects/contact-preferences.vo';
import { ContactRelationship } from '../value-objects/contact-relationship.vo';
import { ContactOrganizationLink } from '../value-objects/contact-organization-link.vo';
import { ContactTimeline } from './contact-timeline.entity';
import { ContactCommunication } from '../value-objects/contact-communication.vo';
import { ContactAIProfile } from '../value-objects/contact-ai-profile.vo';
import { ContactStatistics } from '../value-objects/contact-statistics.vo';

export class Contact {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: ContactIdentity,
    public readonly profile: ContactProfile,
    public status: ContactStatus,
    public readonly type: ContactType,
    public lifecycle: ContactLifecycle,
    public consent: ContactConsent,
    public readonly preferences: ContactPreferences,
    public relationships: ContactRelationship[],
    public organizationLinks: ContactOrganizationLink[],
    public readonly timeline: ContactTimeline,
    public communications: ContactCommunication[],
    public aiProfile: ContactAIProfile,
    public statistics: ContactStatistics,
    public tags: string[],
  ) {}

  public archive(): void {
    this.status = new ContactStatus('ARCHIVED', 'Manually archived', new Date());
    this.lifecycle = new ContactLifecycle(
      true,
      this.lifecycle.createdAt,
      this.lifecycle.lastActivityAt,
    );
  }
}

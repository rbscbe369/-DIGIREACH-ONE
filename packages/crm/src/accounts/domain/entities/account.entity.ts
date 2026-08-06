import { AccountIdentity } from '../value-objects/account-identity.vo';
import { AccountProfile } from '../value-objects/account-profile.vo';
import { AccountClassification } from '../value-objects/account-classification.vo';
import { AccountIndustry } from '../value-objects/account-industry.vo';
import { AccountFinancialProfile } from '../value-objects/account-financial-profile.vo';
import { AccountTaxProfile } from '../value-objects/account-tax-profile.vo';
import { AccountCreditProfile } from '../value-objects/account-credit-profile.vo';
import { AccountCommunication } from '../value-objects/account-communication.vo';
import { AccountHierarchy } from '../value-objects/account-hierarchy.vo';
import { AccountTerritory } from '../value-objects/account-territory.vo';
import { AccountRelationship } from '../value-objects/account-relationship.vo';
import { AccountStatistics } from '../value-objects/account-statistics.vo';
import { AccountPreference } from '../value-objects/account-preference.vo';
import { AccountAIProfile } from '../value-objects/account-ai-profile.vo';
import { AccountTimeline } from './account-timeline.entity';
import { AccountBranch } from './account-branch.entity';
import { AccountType } from '../value-objects/account-type.vo';
import { AccountStatus } from '../value-objects/account-status.vo';
import { AccountLifecycle } from '../value-objects/account-lifecycle.vo';

export class Account {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: AccountIdentity,
    public readonly profile: AccountProfile,
    public readonly classification: AccountClassification,
    public readonly industry: AccountIndustry,
    public readonly financialProfile: AccountFinancialProfile,
    public readonly taxProfile: AccountTaxProfile,
    public readonly creditProfile: AccountCreditProfile,
    public communications: AccountCommunication,
    public hierarchy: AccountHierarchy,
    public branches: AccountBranch[],
    public territories: AccountTerritory[],
    public relationships: AccountRelationship[],
    public statistics: AccountStatistics,
    public preferences: AccountPreference,
    public aiProfile: AccountAIProfile,
    public timeline: AccountTimeline,
    public type: AccountType,
    public status: AccountStatus,
    public lifecycle: AccountLifecycle,
    public tags: string[],
  ) {}

  public archive(): void {
    this.status = new AccountStatus('ARCHIVED', 'Manually archived', new Date());
    this.lifecycle = new AccountLifecycle(
      true,
      this.lifecycle.createdAt,
      this.lifecycle.lastActivityAt,
    );
  }
}

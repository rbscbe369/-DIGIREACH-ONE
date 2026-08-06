import { AccountService } from '../services/account.service';
import { AccountMergeService } from '../services/account-merge.service';
import { AccountSearchService } from '../services/account-search.service';
import { Account } from '../../domain/entities/account.entity';
import { AccountConvertedFromLeadEvent } from '../../domain/events/account.events';
import { AccountIdentity } from '../../domain/value-objects/account-identity.vo';
import { AccountProfile, AccountSize } from '../../domain/value-objects/account-profile.vo';
import { AccountStatus } from '../../domain/value-objects/account-status.vo';
import { AccountType } from '../../domain/value-objects/account-type.vo';
import { AccountLifecycle } from '../../domain/value-objects/account-lifecycle.vo';
import { AccountClassification } from '../../domain/value-objects/account-classification.vo';
import { AccountIndustry } from '../../domain/value-objects/account-industry.vo';
import { AccountFinancialProfile } from '../../domain/value-objects/account-financial-profile.vo';
import { AccountTaxProfile } from '../../domain/value-objects/account-tax-profile.vo';
import { AccountCreditProfile } from '../../domain/value-objects/account-credit-profile.vo';
import { AccountCommunication } from '../../domain/value-objects/account-communication.vo';
import { AccountHierarchy } from '../../domain/value-objects/account-hierarchy.vo';
import { AccountStatistics } from '../../domain/value-objects/account-statistics.vo';
import { AccountPreference } from '../../domain/value-objects/account-preference.vo';
import { AccountAIProfile } from '../../domain/value-objects/account-ai-profile.vo';
import { AccountTimeline } from '../../domain/entities/account-timeline.entity';

export class CreateAccountUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(account: Account): Promise<void> {
    await this.accountService.saveAccount(account);
  }
}

export class UpdateAccountUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(account: Account): Promise<void> {
    await this.accountService.saveAccount(account);
  }
}

export class MergeAccountsUseCase {
  constructor(private readonly mergeService: AccountMergeService) {}
  async execute(masterId: string, duplicateIds: string[]): Promise<Account> {
    return this.mergeService.mergeAccounts(masterId, duplicateIds);
  }
}

export class ArchiveAccountUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(accountId: string): Promise<void> {
    const account = await this.accountService.getAccount(accountId);
    if (account) {
      account.archive();
      await this.accountService.saveAccount(account);
    }
  }
}

export class DeleteAccountUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(accountId: string): Promise<void> {
    await this.accountService.deleteAccount(accountId);
  }
}

export class SearchAccountsUseCase {
  constructor(private readonly searchService: AccountSearchService) {}
  async execute(query: string, metadata: Record<string, unknown>): Promise<Account[]> {
    return this.searchService.searchAccounts(query, metadata);
  }
}

export class GetAccountTimelineUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(accountId: string): Promise<AccountTimeline | null> {
    const account = await this.accountService.getAccount(accountId);
    return account ? account.timeline : null;
  }
}

export class ConvertLeadToAccountUseCase {
  constructor(private readonly accountService: AccountService) {}
  async execute(leadId: string, _metadata: Record<string, unknown>): Promise<Account> {
    // Scaffold conversion logic
    const account = new Account(
      'new-account-' + leadId,
      'tenant',
      new AccountIdentity('A-' + leadId, null, null, null, null, null, null, null, null),
      new AccountProfile('Converted Account', null, null, new AccountSize(null, null), [], {}),
      new AccountClassification(null, null, null),
      new AccountIndustry(null, null, null, null),
      new AccountFinancialProfile(null, null, null),
      new AccountTaxProfile(false, null, null, null),
      new AccountCreditProfile(null, null, null, null),
      new AccountCommunication([], [], [], [], [], [], [], [], []),
      new AccountHierarchy('HOLDING_COMPANY', null, null, []),
      [],
      [],
      [],
      new AccountStatistics(0, 0, 0, 0),
      new AccountPreference(null, null, null),
      new AccountAIProfile(),
      new AccountTimeline([]),
      new AccountType('PROSPECT'),
      new AccountStatus('ACTIVE', null, new Date()),
      new AccountLifecycle(false, new Date(), null),
      [],
    );
    await this.accountService.saveAccount(account);
    new AccountConvertedFromLeadEvent(account.id, leadId);
    return account;
  }
}

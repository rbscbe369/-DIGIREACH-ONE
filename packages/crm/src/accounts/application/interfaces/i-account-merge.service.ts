import { Account } from '../../domain/entities/account.entity';

export interface IAccountMergeService {
  mergeAccounts(masterId: string, duplicateIds: string[]): Promise<Account>;
}

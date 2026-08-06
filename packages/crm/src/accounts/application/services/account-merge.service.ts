import { IAccountMergeService } from '../interfaces/i-account-merge.service';
import { Account } from '../../domain/entities/account.entity';

export class AccountMergeService implements IAccountMergeService {
  async mergeAccounts(_masterId: string, _duplicateIds: string[]): Promise<Account> {
    // Placeholder merge logic
    return {} as Account;
  }
}

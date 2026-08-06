import { Account } from '../../domain/entities/account.entity';
import { AccountDuplicate } from '../../domain/entities/account-duplicate.entity';

export interface IAccountDuplicateDetector {
  detectDuplicates(account: Account): Promise<AccountDuplicate[]>;
}

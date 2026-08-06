import { IAccountDuplicateDetector } from '../../application/interfaces/i-account-duplicate.detector';
import { Account } from '../../domain/entities/account.entity';
import { AccountDuplicate } from '../../domain/entities/account-duplicate.entity';

export class DummyAccountDuplicateProvider implements IAccountDuplicateDetector {
  async detectDuplicates(_account: Account): Promise<AccountDuplicate[]> {
    return [];
  }
}

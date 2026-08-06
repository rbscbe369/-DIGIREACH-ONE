import { Account } from '../../domain/entities/account.entity';
import { AccountHierarchy } from '../../domain/value-objects/account-hierarchy.vo';

export class AccountHierarchyService {
  async changeParent(account: Account, newParentId: string | null): Promise<void> {
    account.hierarchy = new AccountHierarchy(
      account.hierarchy.hierarchyType,
      newParentId,
      account.hierarchy.globalUltimateAccountId,
      account.hierarchy.childAccountIds,
    );
  }
}

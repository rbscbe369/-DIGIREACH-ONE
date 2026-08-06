import { AccountAddress } from '../value-objects/account-profile.vo';

export class AccountBranch {
  constructor(
    public readonly branchId: string,
    public readonly branchCode: string,
    public readonly branchType: string,
    public readonly address: AccountAddress,
    public readonly managerId: string | null,
    public readonly region: string | null,
    public readonly timeZone: string | null,
    public readonly status: string,
  ) {}
}

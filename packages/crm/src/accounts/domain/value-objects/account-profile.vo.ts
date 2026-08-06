export class AccountAddress {
  constructor(
    public readonly type:
      | 'HEAD_OFFICE'
      | 'BILLING'
      | 'SHIPPING'
      | 'BRANCH_OFFICE'
      | 'WAREHOUSE'
      | 'REGISTERED_OFFICE'
      | 'OTHER',
    public readonly street: string | null,
    public readonly city: string | null,
    public readonly state: string | null,
    public readonly country: string | null,
    public readonly postalCode: string | null,
    public readonly isPrimary: boolean,
  ) {}
}

export class AccountSize {
  constructor(
    public readonly employeeCount: number | null,
    public readonly officeLocations: number | null,
  ) {}
}

export class AccountProfile {
  constructor(
    public readonly companyName: string,
    public readonly legalName: string | null,
    public readonly foundedDate: Date | null,
    public readonly size: AccountSize,
    public readonly addresses: AccountAddress[],
    public readonly customFields: Record<string, unknown>,
  ) {}
}

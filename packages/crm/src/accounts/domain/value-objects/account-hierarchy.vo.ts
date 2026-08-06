export class AccountHierarchy {
  constructor(
    public readonly hierarchyType:
      | 'HOLDING_COMPANY'
      | 'PARENT_COMPANY'
      | 'SUBSIDIARY'
      | 'DIVISION'
      | 'BRANCH'
      | 'REGION'
      | 'TERRITORY'
      | 'FRANCHISE',
    public readonly parentAccountId: string | null,
    public readonly globalUltimateAccountId: string | null,
    public readonly childAccountIds: string[] = [],
  ) {}
}

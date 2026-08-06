export enum FilterOperator {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  GREATER_THAN = 'GREATER_THAN',
  LESS_THAN = 'LESS_THAN',
  IN = 'IN',
  NOT_IN = 'NOT_IN',
  CONTAINS = 'CONTAINS',
}

export class SearchFilter {
  constructor(
    public readonly field: string,
    public readonly operator: FilterOperator,
    public readonly value: unknown,
  ) {}
}

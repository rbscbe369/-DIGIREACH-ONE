export class CRMSearchContext {
  constructor(
    public readonly query: string,
    public readonly filters: Record<string, unknown>,
    public readonly relevantRecordIds: string[],
  ) {}
}

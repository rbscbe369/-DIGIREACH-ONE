export class ContractTerm {
  constructor(
    public readonly startDate: Date,
    public readonly endDate: Date | null,
    public readonly noticePeriodDays: number | null,
  ) {
    if (endDate && startDate >= endDate) {
      throw new Error('Contract end date must be after start date');
    }
    if (noticePeriodDays !== null && noticePeriodDays < 0) {
      throw new Error('Notice period cannot be negative');
    }
  }

  public get isFixedTerm(): boolean {
    return this.endDate !== null;
  }
}

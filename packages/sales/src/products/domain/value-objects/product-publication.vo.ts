export class ProductPublication {
  constructor(
    public readonly effectiveDate: Date,
    public readonly expirationDate: Date | null,
    public readonly countryAvailability: string[],
    public readonly marketAvailability: string[],
    public readonly publicationSchedule: Record<string, unknown>,
  ) {}
}

export class CalendarIdentity {
  constructor(
    public readonly calendarNumber: string,
    public readonly externalId: string | null,
    public readonly internalCode: string | null,
    public readonly ownerId: string,
    public readonly visibility: string,
    public readonly isDefault: boolean,
    public readonly sourceSystem: string | null,
  ) {}
}

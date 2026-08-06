export class BusinessHours {
  constructor(
    public readonly openTime: string,
    public readonly closeTime: string,
    public readonly timeZone: string,
    public readonly workingDays: number[],
  ) {}
}

export class HolidayReference {
  constructor(
    public readonly holidayId: string,
    public readonly date: Date,
    public readonly name: string,
  ) {}
}

export class WorkingHours {
  constructor(
    public readonly daysOfWeek: number[],
    public readonly startTime: string,
    public readonly endTime: string,
  ) {}
}

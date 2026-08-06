export class CalendarPermission {
  constructor(
    public readonly roleIds: string[],
    public readonly userIds: string[],
  ) {}
}

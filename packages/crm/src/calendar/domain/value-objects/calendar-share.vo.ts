export class CalendarShare {
  constructor(
    public readonly sharedWithId: string,
    public readonly accessLevel: 'READ' | 'WRITE' | 'ADMIN',
  ) {}
}

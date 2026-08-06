export class CalendarInvitation {
  constructor(
    public readonly inviteeId: string,
    public readonly status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'TENTATIVE',
    public readonly sentAt: Date,
  ) {}
}

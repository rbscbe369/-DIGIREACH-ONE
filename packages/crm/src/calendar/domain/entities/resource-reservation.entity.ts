export class ResourceReservation {
  constructor(
    public readonly reservationId: string,
    public readonly resourceId: string,
    public readonly meetingId: string,
    public readonly startTime: Date,
    public readonly endTime: Date,
  ) {}
}

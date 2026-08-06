export class RoomReservation {
  constructor(
    public readonly reservationId: string,
    public readonly roomId: string,
    public readonly meetingId: string,
    public readonly startTime: Date,
    public readonly endTime: Date,
  ) {}
}

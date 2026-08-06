export class CalendarResource {
  constructor(
    public readonly resourceId: string,
    public readonly name: string,
    public readonly type:
      | 'MEETING_ROOM'
      | 'CONFERENCE_ROOM'
      | 'DESK'
      | 'VEHICLE'
      | 'PROJECTOR'
      | 'EQUIPMENT'
      | 'SHARED_RESOURCE'
      | 'PARKING',
  ) {}
}

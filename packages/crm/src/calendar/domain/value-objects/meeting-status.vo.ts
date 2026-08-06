export type MeetingStatusValue =
  'SCHEDULED' | 'RESCHEDULED' | 'CANCELLED' | 'IN_PROGRESS' | 'COMPLETED';
export class MeetingStatus {
  constructor(public readonly value: MeetingStatusValue) {}
}

export class MeetingStatistics {
  constructor(
    public readonly participantCount: number,
    public readonly attendanceRate: number | null,
  ) {}
}

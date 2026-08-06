export class MeetingAgendaItem {
  constructor(
    public readonly title: string,
    public readonly durationMinutes: number | null,
  ) {}
}
export class MeetingAgenda {
  constructor(public readonly items: MeetingAgendaItem[] = []) {}
}

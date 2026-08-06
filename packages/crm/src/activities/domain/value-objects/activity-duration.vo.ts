export class ActivityDuration {
  constructor(
    public readonly estimatedMinutes: number | null,
    public readonly actualMinutes: number | null,
  ) {}
}
